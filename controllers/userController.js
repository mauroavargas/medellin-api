const {
    resolverGetSingleUser,
    resolverGetAllUsers,
    resolverCreateNewUser,
    resolverUpdateUser,
    resolverDeleteUser
} = require('./resolvers/userResolvers')

module.exports = {
    controllerGetAllUsers: (req, res) => {
        resolverGetAllUsers()
            .then((users) => {
                res.status(200).json({ message: "Users obtained!", data: users });
            })
            .catch((err) => {
                res.status(404).json({ message: "Error getting users", data: err });
            });
    },

    controllerGetSingleUser: (req, res) => {
        const { id } = req.params;
        resolverGetSingleUser(id, req.body)
            .then((user) => {
                res.status(200).json({ message: "User obtained!", data: user });
            })
            .catch((err) => {
                res.status(404).json({  message: "Error getting user", data: err });
            })
    },

    controllerCreateNewUser: (req, res) => {

        const { 
            first_name,
            last_name,
            email 
           } = req.body;
       
         const document = {
           first_name,
           last_name,
           email,
         };

        resolverCreateNewUser(document)
            .then((user) => res.status(201).json({ message: 'User created!', data: user }))
            .catch((err) => res.status(400).json({ message: 'Error creating user', errors: err }));    
    },

    controllerUpdateUser: (req, res) => {
        const { id } = req.params;
        resolverUpdateUser(id, req.body)
            .then((updatedUser) => res.status(200).json({ message: 'User updated!', data: updatedUser }))
            .catch((err) => res.status(404).json({ message: 'Error updating user', data: err }));
    },

    controllerUpdateUser: async (req, res) => {
        const { id } = req.params;
        try {
            const response = await resolverUpdateUser(id, req.body);
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    //         .then((updatedUser) => res.status(200).json({ message: 'User updated!', data: updatedUser }))
    //         .catch((err) => res.status(404).json({ message: 'Error updating user', data: err }));
    },

    controllerDeleteUser: (req, res) => {
        const { id } = req.params;
        resolverDeleteUser(id)
            .then((userDeleted) => res.status(200).json())
            .catch((err) => res.status(404).json({ message: 'Error deleting user', data: err }));
    }
        
}
