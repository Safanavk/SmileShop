// const crypto = require('crypto');
// const OTP = require('../model/otpSchema');
// const transporter = require('../config/email');

// const generateOtp = () => {
//     return crypto.randomInt(100000, 999999).toString();
// };

// const storeOtp = async (email, otp) => {
//     await OTP.deleteMany({ email });

//     const otpDOC = new OTP({
//         email,
//         otp,
//         expiresAt: new Date(Date.now() + 1 * 60 * 1000)
//     });
//     await otpDOC.save();
// };

// const sendOtp = async (email, otp) => {
//     const mailOptions = {
//         from: process.env.SEND_OTP_EMAIL,
//         to: email,
//         subject: 'Your OTP Code',
//         text: `Your OTP Code is ${otp}`
//     };
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('OTP email sent successfully');
//     } catch (error) {
//         console.error('Error sending OTP email:', error);
//         throw error; // Propagate the error back to the caller if necessary
//     }
// };

// module.exports = { generateOtp, storeOtp, sendOtp };
