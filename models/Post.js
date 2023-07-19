const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: 'Title needed',
      maxLength: 100
    },
    text: {
        type: String,
        required: 'Text is required'
      },
    image: {
        type: String
      },
},
{timestamps: true});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

