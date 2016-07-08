"use strict";

var User = {
    connection: 'myLocalOrient',
    tableName: 'user',
    attributes: {
        id: {
            type: 'string',
            primaryKey: true
        },
        username: {
            type: 'string',
            unique: true
        },
        email: {
            type: 'email',
            unique: true
        },
        dob: {
            type: 'date'
        },
        pictureUrl: {
            type: 'link'
        }
    }
};

module.exports = User;