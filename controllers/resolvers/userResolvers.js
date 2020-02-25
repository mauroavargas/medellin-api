const { Users } = require('../../models');

module.exports = {

    resolverGetSingleUser: id => {
        return Users.findById(id);
    },

    resolverGetAllUsers: () => {
        return Users.find({ is_active:true });
    },

    resolverCreateNewUser: document => {
         return Users.create(document);
    },

    resolverUpdateUser: (id, body) => {
        return Users.findByIdAndUpdate(id, body, { new: true });
    },

    resolverDeleteUser: id => {
        return Users.findByIdAndUpdate(id, { is_active: false, new:true });
    }

}