import { Channel } from "../models/Channel.js";
import express from 'express';

const router = express.Router();

router.get('/channels', async (req, res) => {
    try {
        let channels = await Channel.find({});
        res.status(200).json(channels);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/createchannel', async (req, res) => {
    try {
        let channel = await new Channel(req.body);
        channel.save();
        res.status(200).json({channel,message:"Channel Create Successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;