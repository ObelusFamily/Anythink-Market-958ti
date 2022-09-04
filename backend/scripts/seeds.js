//TODO: seeds script should come here, so we'll be able to put some data in our local env
const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.DATABASE_URL);
require("../models/User");
require("../models/Item");
require("../models/Comment");

const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");

mongoose.connect(process.env.DATABASE_URL);

const seedDB = async () => {
  for (let i = 0; i < 100; i++) {
    const username = `${faker.name.firstName()}${faker.random.alphaNumeric(2)}`;
    const dummyUser = {
      username,
      email: `${username}@gmail.com`,
      role: "user",
      favorites: [],
      following: [],
    };
    const user = new User(dummyUser);
    const dbUser = await user.save();

    const dummyItem = {
      slug: faker.datatype.uuid(),
      title: faker.vehicle.vehicle(),
      description: "Lorem Ipsum dolor",
      image: "https://picsum.photos/200/300",
      comments: [],
      tagList: [],
      seller: dbUser._id,
    };

    const item = new Item(dummyItem);
    const dbItem = item.save();

    const dummyComment = {
      body: "Lorem Ipsum dolor",
      seller: dbUser._id,
      item: dbItem._id,
    };

    const comment = new Comment(dummyComment);
    comment.save();
  }
};

seedDB()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
