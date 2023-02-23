const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val.length > 4 || val.length === 0
            },
            message: () => `Post title is must be at least 4 characters`
        },
    },
    description: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
