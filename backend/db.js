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
    },
    status: {
        type: String
    },
    pfp: {
        type: String
    },
    pendingUsers: [{
        type: String
    }],
    acceptedUsers: [{
        type: String
    }],
    monuments: [{
        type: String
    }],
    city: [{
        type: String
    }]

}); 

const users = mongoose.model('users', kahUsers);

export default users;