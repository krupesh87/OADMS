import nodemailer from 'nodemailer';

const bookingMail = async (user,email,date,day,channel,slot,program) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "Gmail",
            port: 587,
            secure: true,
            auth: {
                user: "internshipkonnect@gmail.com",
                pass: "lrzpvtofsraevghn",
            },
        });

        await transporter.sendMail({
            from: email,
            to: "internshipkonnect@gmail.com",
            subject: "Booking For Slot",
            text: "Slot booking details are",
            html: `
            <h3>Slot Booking Request Details are</h3>
            <b>User:</b> <span>${user}</span> <br>
            <b>Sender Email:</b> <span>${email}</span> <br>
            <b>Date:</b> <span>${date}</span> <br>
            <b>Day:</b> <span>${day}</span> <br>
            <b>Channel:</b> <span>${channel}</span> <br>
            <b>Slot:</b> <span>${slot}</span> <br>
            <b>Program:</b> <span>${program}</span>
            `
        });

        console.log("email sent successfully")
    } catch (error) {
        console.log(error, "email not sent");
    }
}

export default bookingMail