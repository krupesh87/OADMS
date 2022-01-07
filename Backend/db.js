import mongoose from 'mongoose';

const Connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect("mongodb://localhost:27017/online-adv-booking-system?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect database.");
    }
}

export default Connection;