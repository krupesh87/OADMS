// import dotenv from 'dotenv';
import express from 'express';
import Connection from './db.js';
import passwordReset from './routes/passwordReset.js';
import users from './routes/users.js';
import booking from './routes/booking.js';
import channel from './routes/channel.js';
import { contactEmail } from './utils/contactEmail.js'

Connection();

// dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);
app.use("/api/booking", booking);
app.use("/api/channel", channel);
app.post("/api/contact", async(req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let Message = req.body.Message;

        await contactEmail(name, email, Message)
        return res.status(200).json("message has received and we will get in touch with you soon")

    } catch (error) {
        console.log("Error", error)
        return res.status(500).json(error)
    }

})

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}...`));