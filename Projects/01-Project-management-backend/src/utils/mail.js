import Mailgen from "mailgen";
import nodermailer from "nodemailer";


const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagelink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)

    const emailHtml = mailGenerator.generate(options.mailgenContent)

    const transporter = nodermailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        form: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed");
        console.error("Error: ", error);
        
    }
}


const emailVerificationContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! We're very excited to have you on board.",
            action: {
                instructions: "To verify your email please click on the following button:",
                button: {
                    color: '#22BC66',
                    text: 'Verify your email',
                    link: verificationUrl
                }
            },
            outro: "Need help, or have any questions? Just reply to this email, we'd love to help."
        }
    };
};


const forgotPasswordMailContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We Got a Request to Reset the password of your Account",
            action: {
                instructions: "To Reset the Password click on the following button:",
                button: {
                    color: '#22BC66',
                    text: 'Reset Password',
                    link: passwordResetUrl
                }
            },
            outro: "Need help, or have any questions? Just reply to this email, we'd love to help."
        }
    };
};


export {
    emailVerificationContent,
    forgotPasswordMailContent,
    sendEmail
}