const { fileUpload } = require("../helpers/common");
const Post = require("../models/postModel");

class postService {

    async getAllPost(req, res) {
        try {
            const postData = await Post.find({});
            res.status(200).jsonp(postData);
        } catch (error) {
            res.send(error);
        }
    }

    async addPost(req, res) {
        try {
            const { title, description } = req.body;
            let fileName = "";

            if (req.file) {
                fileName = req.file.filename;
            }

            const postData = await Post.create({
                title: title,
                description: description,
                post_image: fileName,
            });

            res.send(postData);
        } catch (error) {
            res.send(error.message);
        }
    }

    async deletePost(req, res) {
        try {
            const _id = req.body.id;
            const isPost = await Post.findById(_id);
            if (isPost) {
                await isPost.delete();
                res.status(200).json({ data: null, message: "Post is deleted successfully." });
            }
            else {
                res.status(400).json({ data: null, message: "Something is wrong or post is not found." });
            }

        } catch (error) {
            res.status(400).json({ data: null, message: error });
        }
    }

    async updatePost(req, res) {
        try {
            const { title, description } = req.body;
            const _id = req.params.id;
            const postData = await Post.findById({ _id });

            let fileName = "";
            if (req.file) {
                fileName = req.file.filename;
            }
            else {
                fileName = postData.post_image;
            }
            postData.title = title;
            postData.description = description;
            postData.post_image = fileName;

            const updateData = await postData.save();
            
            res.status(200).jsonp({
                data: updateData,
                message: "Post data was successfully updated.",
            });

        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }
}

module.exports = new postService();