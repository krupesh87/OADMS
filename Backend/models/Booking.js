import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    channelname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    slot1: {
        type: Boolean,
        default: false
    },
    slot1u: {
        type: String,
        default: 'none'
    },
    slot1p:{
        type: String,
        default: 'No Program'
    },
    slot2: {
        type: Boolean,
        default: false
    },
    slot2u: {
        type: String,
        default: 'none'
    },
    slot2p:{
        type: String,
        default: 'No Program'
    },
    slot3: {
        type: Boolean,
        default: false
    },
    slot3u: {
        type: String,
        default: 'none'
    },
    slot3p:{
        type: String,
        default: 'No Program'
    },
    slot4: {
        type: Boolean,
        default: false
    },
    slot4u: {
        type: String,
        default: 'none'
    },
    slot4p:{
        type: String,
        default: 'No Program'
    },
    slot5: {
        type: Boolean,
        default: false
    },
    slot5u: {
        type: String,
        default: 'none'
    },
    slot5p:{
        type: String,
        default: 'No Program'
    },
    slot6: {
        type: Boolean,
        default: false
    },
    slot6u: {
        type: String,
        default: 'none'
    },
    slot6p:{
        type: String,
        default: 'No Program'
    },
    slot7: {
        type: Boolean,
        default: false
    },
    slot7u: {
        type: String,
        default: 'none'
    },
    slot7p:{
        type: String,
        default: 'No Program'
    },
    slot8: {
        type: Boolean,
        default: false
    },
    slot8u: {
        type: String,
        default: 'none'
    },
    slot8p:{
        type: String,
        default: 'No Program'
    }
})

export const Booking = mongoose.model('booking',BookingSchema);