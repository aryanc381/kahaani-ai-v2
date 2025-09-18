import express from 'express';
import users from '../db.js';

const router = express.Router();

router.use(express.json());

router.post('/friends/search/request', async (req, res) => {
    const { from, to } = req.body;

    if (!from || !to) {
        return res.status(400).json({ msg: "Both from and to emails are required." });
    }

    try {
        const fromUser = await users.findOne({ email: from });
        const toUser = await users.findOne({ email: to });

        if (!fromUser || !toUser) {
            return res.status(404).json({ msg: "User not found." });
        }

        // Ensure arrays exist
        toUser.pendingUsers = toUser.pendingUsers || [];
        toUser.acceptedUsers = toUser.acceptedUsers || [];

        if (toUser.acceptedUsers.includes(from)) {
            return res.status(400).json({ msg: "You are already friends." });
        }

        if (toUser.pendingUsers.includes(from)) {
            return res.status(400).json({ msg: "Request already sent." });
        }

        toUser.pendingUsers.push(from); // email instead of ObjectId
        await toUser.save();

        return res.status(200).json({ msg: "Request sent successfully!" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error." });
    }
});

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

