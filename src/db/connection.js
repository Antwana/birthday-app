
// `use strict`;
var mongoose = require("mongoose")
var schema = mongoose.Schema
// mongoose.connect("mongodb://localhost/birthday")

var BirthdayCommentSchema = new mongoose.Schema({
  name: String,
  idea: String,
  comment: String
})
var BirthdayPostSchema = new mongoose.Schema({
  name: String,
  idea: String,
  ages: String,
  gender: String,
  image: String,
  description: String,
  comments: [BirthdayCommentSchema]
}
)
mongoose.model("BirthdayPost", BirthdayPostSchema)
mongoose.model("BirthdayComment", BirthdayCommentSchema)


module.exports = mongoose

module.exports = mongoose.model("BirthdayPost", BirthdayPostSchema)





// var postModel = post;

// PostModel = mongoose.model("{Post}", PostSchema);
// CommentModel = mongoose.model("{Comment}", CommentSchema);


//
// module.exports = mongoose.model("Post", PostSchema)
// var Schema = mongoose.Schema;
