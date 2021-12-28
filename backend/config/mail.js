const nodemailer = require('nodemailer');
const senderInfo = require('./sendInfo.json');

const mailSender = {
    // 메일발송 함수
    sendGmail: function (email, code) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',   // 메일 보내는 곳
            prot: 587,
            host: 'smtp.gmlail.com',
            secure: false,
            requireTLS: true ,
            auth: {
                user: senderInfo.user,  // 보내는 메일의 주소
                pass: senderInfo.pass   // 보내는 메일의 비밀번호
            }
        });
        // 메일 옵션
        const mailOptions = {
            from: senderInfo.user, // 보내는 메일의 주소
            to: email, // 수신할 이메일
            subject: "인증번호", // 메일 제목
            text: "인증번호 입니다. " + code // 메일 내용
        };

        // 메일 발송
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }
}

module.exports = mailSender;