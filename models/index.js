/**
 * Created by koc9n on 4/15/16.
 */
"use strict";

/**
 * Тут происходит магия по подключению сущностей в орм
 */

var fs = require("fs");
var path = require("path");
var Waterline = require('waterline');
var orientAdapter = require('sails-orientdb');

var env = process.env.NODE_ENV || "dev";
var config = require(path.join(__dirname, '..', 'configs', 'config.json'))[env];
var entitiesDir = path.join(__dirname, './entities');

function DB() {
    var self = this;

    self.orm = !self.orm ? new Waterline() : self.orm;
    self.db = null;
    self.config = {

        adapters: {
            'default': orientAdapter,
            orient: orientAdapter,
        },

        connections: {
            myLocalOrient: {
                adapter: 'orient',
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 2424,
                user: process.env.DB_USER || 'root',
                password: process.env.DB_PASSWORD || 'root',
                database: process.env.DB_NAME || 'freepe'
            }
        },

        defaults: {
            migrate: 'drop' // or 'alter' or 'safe'
        }

    };

    self.init = function (next) {
        var self = this;
        if (!self.db) {
            fs
                .readdirSync(entitiesDir)
                .forEach(function (file) {
                    var entity = require(path.join(entitiesDir, file));
                    entity.connection = Object.keys(self.config.connections)[0];
                    entity.tableName = file.substring(0, file.indexOf('.'));
                    self.orm.loadCollection(Waterline.Collection.extend(entity));
                });

            self.orm.initialize(self.config, function (err, models) {
                if (err) throw err;
                self.db = {};
                self.db.models = models.collections;
                self.db.connections = models.connections;

                for (var i in self.db.models) {
                    global[self.db.models[i].tableName] = self.db.models[i];
                    console.log('Added to Global Table <' + self.db.models[i].tableName + ">");
                }

                console.log('initialized DB');
                next();
            });
        } else {
            next();
        }
    };

    return self;
};

module.exports = new DB();




