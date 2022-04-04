import people from './users/users.js';
let users = people;

const userController = (app) => {
 app.get('/api/users', findAllUsers);
}

const findUsersByType = (type) => {
    const users_with_type = users.filter(function (users) {
        return users.type == type});
    return users_with_type;
}

const findAllUsers = (req, res) => {
 const type = req.query.type;
 if(type) {
   res.json(findUsersByType(type));
   return;
 }
 res.json(users);
}


export default userController;