const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            trim: true
        },
        user: {
            type: String,
            required: [true, "Please make sure to provide a user"]
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    }, {
        timestamps: true
    }
)

const Comments = mongoose.model('comment', commentSchema);

module.exports = Comments