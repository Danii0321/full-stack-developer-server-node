import posts from "./tuits/tuits.js";
let tuits = posts;

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
const updateTuit = (req, res) => {}

const deleteTuit = (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
 res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
