const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    role: {
        type: Boolean,
        default: false,
    },          //specification of roles  for user and admin 

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true,
    },

    phone: {
        type: String,
        required: true,
        unique: true,
    },

    profileImage: {
        type: String,
        default: "https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000",
    },

    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);