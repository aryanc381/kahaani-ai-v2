import express from 'express';
import users from '../db.js';

const router = express.Router();

router.use(express.json());

router.get('/friends/search', async (req, res) => {
    try {
        const {email} = req.query;

        if(!email || email.trim() === "") {
            return res.status(200).json({
                msg: "Email is required."
            });
        }

        const results = await users.find({
            email: { $regex: email, $options: 'i'},
        }).limit(10);

        let msg = ''
        if (results.length > 0) {
            msg = 'Users found.'
        } else {
            msg = 'No user found with email ' + email
        }

        res.status(200).json({
            msg: msg,
            usersData: results
        });
    } catch(err) {
        console.log("Error searching users");
        res.status(200).json({
            msg: "Internal Server Error"
        });
    }
});

export default router;

