import posts from "./tuits/tuits.js";
let tuits = posts;

const tuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

// need to format this correctly
const createTuit = (req, res) => {
 const newTuit = req.body;
 newTuit.postedBy= {
                                            "username": "Me"
                                        };
 newTuit._id = (new Date()).getTime()+'';
 newTuit.likes = 0;
  newTuit.stats= {
                             "comments": 0,
                             "retuits": 0,
                             "likes": 0
                         }
 tuits.push(newTuit);
 res.json(newTuit);
}

const findAllTuits = (req, res) =>
 res.json(tuits);

const deleteTuit = (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
 res.sendStatus(200);
}

const updateTuit = (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updatedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
 res.sendStatus(200);
}

export default tuitsController;