import mongoose, { model, Schema, Types } from "mongoose";

mongoose.connect("mongodb+srv://Admin:5q5TWSF5P2w6rkx0@cluster0.78zjm11.mongodb.net/second-brain")

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})


const tagSchema = new Schema({
  title: { type: String, required: true, unique: true }
});



const contentTypes = ['image', 'video', 'article', 'audio']

const contentSchema = new Schema({
    title: {type: String, required: true},
    link: {type: String, required: true},
    type: {type: String, enum: contentTypes},
    tags: [{type: Types.ObjectId, ref: "Tag"}],
    userId: {type: Types.ObjectId, ref: "User", required: true}
})


const linksSchema = new Schema({
  hash: {type: String},
  userId: {type: Types.ObjectId, ref: "User", required: true, unique: true}
})



export const UserModel = model("User", userSchema);
export const TagModel = model("Tag", tagSchema);
export const ContentModel = model("Content", contentSchema);
export const LinkModel = model("Link", linksSchema);