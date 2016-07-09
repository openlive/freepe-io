var User = {
  attributes: {
    username  : { type: 'string', unique: true },
    profileUrl  : { type: 'link'},
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    photos    : { type: 'array'},
    name      : { type: 'object', unique: true }
  }
};

module.exports = User;
