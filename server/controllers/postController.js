
import Post from '../models/Post.js'

export const createPost = async(req,res)=>{
 const post = await Post.create({
  title:req.body.title,
  content:req.body.content,
  author:req.user._id
 })
 res.json(post)
}

export const getPosts = async(req,res)=>{
 const posts = await Post.find().populate("author","name")
 res.json(posts)
}

export const getPostById = async(req,res)=>{
 const post = await Post.findById(req.params.id)
 res.json(post)
}

export const updatePost = async(req,res)=>{
 const post = await Post.findById(req.params.id)

 if(post.author.toString() !== req.user._id){
  return res.status(403).json({message:"Not authorized"})
 }

 post.title = req.body.title || post.title
 post.content = req.body.content || post.content

 const updated = await post.save()
 res.json(updated)
}

export const deletePost = async(req,res)=>{
 const post = await Post.findById(req.params.id)

 if(post.author.toString() !== req.user._id){
  return res.status(403).json({message:"Not authorized"})
 }

 await post.deleteOne()
 res.json({message:"Post deleted"})
}
