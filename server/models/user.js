import mongoose from "mongoose";

// define a mongoose schema for users
const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

// construct a user model, using the user schema
const User = mongoose.model("User", userSchema);

export default User;
