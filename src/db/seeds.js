const birthdayPost =
[
  {
    name: "Martha",
    idea: "Backwards Party",
    ages: "5-12",
    gender: "Both",
    image: "https://images.pexels.com/photos/39363/gift-made-package-loop-39363.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    description: "Why not do everything backwards? You can make it really fun by sending out thank you cards as invitations, having the birthday cake first, or even making the kids say everyone's name backwards"
  },
  {
    name: "Casey",
    idea: "Tea Party",
    ages: "3-8",
    gender: "girls",
    image: "https://images.pexels.com/photos/42322/tea-tea-time-person-summer-42322.jpeg?h=350&auto=compress&cs=tinysrgb",
    description: "Have a tea party where all of the girls can dress up and have tea with cake. Make everything fancy with soothing music and nice decorations. This party is sure to be a hit!"
  }
]
const birthdayComment = [
  {
    name: "Tiffany",
    idea: "Backwards Party",
    comment: "I really love this idea! It's so original"
  },
  {
    name: "Jason",
    idea: "Backwards Party",
    comment: "We did this for our son and everyone had a blast"
  }
]

var mongoose = require("./connection")

var BirthdayPost = mongoose.model("BirthdayPost")
var BirthdayComment = mongoose.model("BirthdayComment")

BirthdayPost.remove({}).then(function()  {
  BirthdayPost.collection.insert(birthdayPost).then(function(results) {
    console.log(results)

    process.exit()
  })
})


BirthdayComment.remove({}).then(function() {
  BirthdayComment.collection.insert(birthdayComment).then(function() {
    process.exit()
  })
})


// var seedData = require("./seeds.json")
// var postSeeds  = require("./seeds");
// var commentSeeds  = require("./seeds");
