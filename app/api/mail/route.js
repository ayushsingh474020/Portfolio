import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can also use SMTP
      auth: {
        user: process.env.EMAIL_USER_SENDER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER_RECEIVER, // your email where you want to receive messages
      subject: `New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Mail sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send mail" }),
      { status: 500 }
    );
  }
}
