/**
 * Created by koc9n on 7/13/2016 AD.
 */
var User = {
    attributes: {
        username: {type: 'string', unique: true},
        profileUrl: {type: 'link'},
        email: {type: 'email', unique: true},
        passports: {collection: 'Passport', via: 'user'},
        photos: {type: 'array'}
    }
};

exports = User;
