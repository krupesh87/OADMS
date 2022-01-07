import nodemailer from 'nodemailer'

const advertisementMail = async (name, email, contactno, advertisementurl, datefrom, dateto, size) => {
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
            subject: "Advertisement Request",
            text: "Advertisement request details are",
            html: `
            <h3>Advertisement Request Details are</h3>
            <b>Name:</b> <span>${name}</span> <br>
            <b>Sender Email:</b> <span>${email}</span> <br>
            <b>Sender Contact No:</b> <span>${contactno}</span> <br>
            <b>Advertisement Url:</b> <span>${advertisementurl}</span> <br>
            <b>Date From:</b> <span>${datefrom}</span> <br>
            <b>Date To:</b> <span>${dateto}</span> <br>
            <b>Size:</b> <span>${size}</span>
            `
        });

        console.log("email sent successfully")
    } catch (error) {
        console.log(error, "email not sent");
    }
}

export default advertisementMail