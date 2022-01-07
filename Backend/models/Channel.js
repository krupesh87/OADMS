import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
    channelname : {
        type: String,
        required: true,
        unique: true
    }
})

export const Channel = new mongoose.model('channel',ChannelSchema);