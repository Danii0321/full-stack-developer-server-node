import people from './users/users.js';
let users = people;

const userController = (app) => {
 app.get('/api/users', findAllUsers);
 app.get('/api/users/:uid', findUserById);
 app.post('/api/users', createUser);
}

const findUsersByType = (type) => {
    const users_with_type = users.filter(function (users) {
        return users.type == type});
    return users_with_type;
}

const findUserById = (req, res) => {
 const userId = req.params.uid;
 const user = users.find(u => u._id === userId);
 res.json(user);
}

const findAllUsers = (req, res) => {
 const type = req.query.type;
 if(type) {
   res.json(findUsersByType(type));
   return;
 }
 res.json(users);
}

const createUser = (req, res) => {
 const newUser = req.body;
 newUser._id = (new Date()).getTime() + '';
 users.push(newUser);
 res.json(newUser);
}


export default userController;