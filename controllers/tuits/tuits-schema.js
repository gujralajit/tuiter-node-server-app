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
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;
