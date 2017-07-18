var mongoose = require("./connection.js")
var seedData = require("./seeds.json")
var seedData  = require("./seeds");

var Post = mongoose.model("Post")
var Comment = mongoose.model("Comment")

Post.remove({}).then(() => {
  Post.collection.insert(seedData).then(() =>{
    process.exit()
  })
})

Comment.remove({}).then(() => {
  Comment.collection.insert(seedData).then(() =>{
    process.exit()
  })
})
