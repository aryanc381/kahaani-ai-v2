import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB);

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
    }],
    accessToken: {
        type: String
    }

}); 

const users = mongoose.model('users', kahUsers);

export default users;