import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    pfp: String,
    userName: String,
    handle: String,
    time: String,
    dislikes : Number,
    disliked: false,
}, {collection: 'tuits'});
export default schema;
