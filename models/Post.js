const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Text is required',
        maxLength: 500
      },
      photo: {
        type: String,
      }
},
{timestamps: true});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

