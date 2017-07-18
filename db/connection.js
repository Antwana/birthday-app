var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/birthday")

var CommentSchema = new mongoose.Schema({
  name: String,
  idea: String,
  comments: String
})
var PostSchema = new mongoose.Schema({
  name: String,
  idea: String,
  ages: String,
  gender: Array,
  image: String,
  description: String,
  comment: [CommentSchema]
}
)


mongoose.model("Post", PostSchema)
mongoose.model("Comment", CommentSchema)

module.exports = mongoose
