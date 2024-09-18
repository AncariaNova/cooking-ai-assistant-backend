const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    dietary: {
      type: String,
      default: "",
    },
    allergies: {
      type: [String],
      default: [],
    },
    dislikedIngredients: {
      type: [String],
      default: [],
    },
    favoriteCuisines: {
      type: [String],
      default: [],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
