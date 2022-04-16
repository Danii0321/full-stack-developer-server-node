import tuitsDao from "./tuits/tuits-dao.js";

const tuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
newTuit.postedBy= {
    "username": "Me"
 };
 newTuit._id = (new Date()).getTime()+'';
 newTuit.likes = 0;
  newTuit.stats= {
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
  }

  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
}

const updateTuit = async (req, res) => {
console.log(req.params.tid);
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
}

export default tuitsController;