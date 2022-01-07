import { Booking } from "../models/Booking.js";
import express from 'express';
import bookingMail from "../utils/bookingmail.js";
import advertisementMail from "../utils/avertisementEmail.js";

const router = express.Router();

router.post('/createbooking', async (req, res) => {
    try {
        const booking = await new Booking(req.body);
        booking.save();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/updatechannel/:channelname/:date', async (req, res) => {
    try {
        // let booking = await Booking.find({ channelname: req.params.channelname, date: req.params.date });
        // let  {channelname, date ,day, user, slot1, slot1u, slot2, slot2u, slot3, slot3u, slot4, slot4u, slot5, slot5u, slot6, slot6u, slot7, slot7u, slot8, slot8u} = req.body;

        // let newbody = {}

        // if(channelname){
        //     newbody.channelname = channelname
        // }

        // if(date){
        //     newbody.date = date
        // }

        // if(day){
        //     newbody.day = day
        // }

        // if(user){
        //     newbody.user = user
        // }

        // if(slot1){
        //     newbody.slot1 = slot1
        // }

        // if(slot1u){
        //     newbody.slot1u = slot1u
        // }

        // if(slot2){
        //     newbody.slot2 = slot2
        // }

        // if(slot2u){
        //     newbody.slot2u = slot2u
        // }

        // if(slot3){
        //     newbody.slot3 = slot3
        // }

        // if(slot3u){
        //     newbody.slot3u = slot3u
        // }

        // if(slot4){
        //     newbody.slot4 = slot4
        // }

        // if(slot4u){
        //     newbody.slot4u = slot4u
        // }

        // if(slot5){
        //     newbody.slot5 = slot5
        // }

        // if(slot5u){
        //     newbody.slot5u = slot5u
        // }

        // if(slot6){
        //     newbody.slot6 = slot6
        // }

        // if(slot6u){
        //     newbody.slot6u = slot6u
        // }

        // if(slot7){
        //     newbody.slot7 = slot7
        // }

        // if(slot7u){
        //     newbody.slot7u = slot7u
        // }

        // if(slot8){
        //     newbody.slot8 = slot8
        // }

        // if(slot8u){
        //     newbody.slot8u = slot8u
        // }

        // if (!booking) {
        //     res.status(400).send("No Booking found")
        // // }
        // console.log(newbody)
        let booking;
        booking = await Booking.findOneAndUpdate({ channelname: req.params.channelname, date: req.params.date }, { $set: req.body })
        booking = await Booking.find({ channelname: req.params.channelname, date: req.params.date })
        res.status(200).json(booking)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/getbooking/:channelname/:date', async (req, res) => {
    try {
        const bookings = await Booking.findOne({ channelname: req.params.channelname, date: req.params.date });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/bookingmail', async (req, res) => {
    try {
        console.log(req.body)
        let user = req.body.user;
        let email = req.body.email;
        let date = req.body.date;
        let day = req.body.day;
        let channel = req.body.channel;
        let slot = req.body.slot;
        let program = req.body.program;

        await bookingMail(user, email, date, day, channel, slot, program);

        let message = "Booking Mail Sent Successfully";

        res.status(200).json(message)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/advertisementrequest', async (req, res) => {
    try {
        console.log(req.body)
        let name = req.body.name;
        let email = req.body.email;
        let contactno = req.body.contactno;
        let advertisementurl = req.body.advertisementurl;
        let datefrom = req.body.datefrom;
        let dateto = req.body.dateto;
        let size = req.body.size;

        await advertisementMail(name, email, contactno, advertisementurl, datefrom, dateto, size);

        let message = "Booking Mail Sent Successfully";

        res.status(200).json(message)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;