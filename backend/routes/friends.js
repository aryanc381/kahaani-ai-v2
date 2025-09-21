import express from 'express';
import users from '../db.js';
import cors from 'cors';

const router = express.Router();

router.use(express.json());
router.use(cors());

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

       
        toUser.pendingUsers = toUser.pendingUsers || [];
        toUser.acceptedUsers = toUser.acceptedUsers || [];

        if (toUser.acceptedUsers.includes(from)) {
            return res.status(400).json({ msg: "You are already friends." }); // already friends - this nigga is if already friends
        }

        if (toUser.pendingUsers.includes(from)) {
            return res.status(400).json({ msg: "Request already sent." }); // req already sent
        }

        toUser.pendingUsers.push(from); 
        await toUser.save();

        return res.status(200).json({ msg: "Request sent successfully!" }); // req sent

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error." }); // backend ki mkc 
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

router.post('/friends/search/accept', async (req, res) => {
  const { from, to } = req.body; 
  // `from` => requester (the one who sent request)
  // `to`   => recipient (the one who is accepting)

  if (!from || !to) {
    return res.status(400).json({ msg: "Both 'from' and 'to' emails are required." });
  }

  try {
    const fromUser = await users.findOne({ email: from });
    const toUser = await users.findOne({ email: to });

    if (!fromUser || !toUser) {
      return res.status(404).json({ msg: "User not found." });
    }

    // make sure B (recipient) actually has A in pendingUsers.
    if (!toUser.pendingUsers || !toUser.pendingUsers.includes(from)) {
      return res.status(400).json({ msg: "No pending request from this user." });
    }

    // remove from pending-users.
    toUser.pendingUsers = toUser.pendingUsers.filter(p => p !== from);

    // add to the fucking accepted users on (both sides).
    if (!toUser.acceptedUsers.includes(from)) {
      toUser.acceptedUsers.push(from);
    }
    if (!fromUser.acceptedUsers.includes(to)) {
      fromUser.acceptedUsers.push(to);
    }

    await Promise.all([toUser.save(), fromUser.save()]);

    return res.status(200).json({ msg: "You are now friends!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error." });
  }
});

router.get('/friends/requests/incoming', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
      msg: "Incoming requests fetched",
      pending: user.pendingUsers || []
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get('/friends/count', async (req, res) => {
    const { email } = req.query;

    if(!email) {
        return res.status(200).json({
            msg: "Email is required."
        });
    }

    try {
        const user = await users.findOne({ email });
        if(!user) {
            return res.status(200).json({msg: "User not found."});
        }

        const count = (user.acceptedUsers.length || 0);
        return res.status(200).json({
            msg: "Friend Count extracted.",
            friendCount: count
        });
    } catch(err) {
        return res.status(200).json({
            msg: "Internal Server Error."
        })
    }
})

export default router;

