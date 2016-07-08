/**
 * Created by koc9n on 4/15/16.
 */
"use strict";


var fs = require("fs");
var path = require("path");
var Waterline = require('waterline');
var orientAdapter = require('sails-orientdb');

var env = process.env.NODE_ENV || "dev";
var config = require(path.join(__dirname, '..', 'configs', 'config.json'))[env];
var entitiesDir = path.join(__dirname, './entities');

var orm = new Waterline();
var orientDB = {};

fs
    .readdirSync(entitiesDir)
    .forEach(function (file) {
        var entity = require(path.join(entitiesDir, file));
        orm.loadCollection(Waterline.Collection.extend(entity));
    });

module.exports = orientDB;

module.exports.init = function (next) {
    var config = {

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
    orm.initialize(config, function(err, models) {
        if(err) throw err;
        orientDB.models = models.collections;
        orientDB.connections = models.connections;
        next();
    });
};