import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  postedBy: {
    username: String
  },
  liked: Boolean,
  disliked: Boolean,
  verified: Boolean,
  handle: String,
  time: String,
  title: String,
  tuit: String,
  attachments: {
    video: String,
    image: String
  },
  "logo-image": String,
  "avatar-image": String,
  stats: {
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
  }
}, {collection: 'tuits'});
export default schema;

// Tuit structure:
// {
//        "_id": "123",
//        "topic": "Web Development",
//        "postedBy": {
//            "username": "ReactJS"
//        },
//        "liked": true,
//        "disliked": false,
//        "verified": false,
//        "handle": "ReactJS",
//        "time": "2h",
//        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//        "attachments": {
//            "video": "unKvMC3Y1kI"
//        },
//        "logo-image": "../../../../tuiter/images/reactblue.png",
//        "avatar-image": "../../../../tuiter/images/reactblue.png",
//        "stats": {
//            "comments": 123,
//            "retuits": 234,
//            "likes": 345,
//            "dislikes": 28
//        }
//    }