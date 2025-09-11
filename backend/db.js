import mongoose from "mongoose";
mongoose.connect('mongodb+srv://venomc381:Venom%4054321@cluster0.yfrink8.mongodb.net/');

const kahUsers = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

const users = mongoose.model('users', kahUsers);

export default users;