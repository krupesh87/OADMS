import axios from 'axios';

const host = "http://localhost:8000"

export const getChannels = async () => {
    try {
       let response = await axios.get(`${host}/api/channel/channels`);
       return response.data; 
    } catch (error) {
        console.log(error)
    }
}

export const getSlots = async (channelname,date) => {
    try {
        let response = await axios.get(`${host}/api/booking/getbooking/${channelname}/${date}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const sendBookingEmail = async(email) => {
    try {
        return await axios.post(`${host}/api/booking/bookingmail`,email);
    } catch (error) {
        console.log(error)
    }
}

export const sendAdvertisementEmail = async(advertisement) => {
    try {
        return await axios.post(`${host}/api/booking/advertisementrequest`,advertisement);
    } catch (error) {
        console.log(error)
    }
}

export const contactemail=async(contact)=>{
    try {
        return await axios.post(`${host}/api/contact`,contact)
    } catch (error) {
        console.log(error)
        
    }
}