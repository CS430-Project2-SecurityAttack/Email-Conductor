const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dungnguyen_2025@depauw.edu",
    pass: "password",
  },
});

let mailOptions = {
  from: '"Payment Services" <paymentservices@depauw.edu>',
  to: "students",
  subject: "Receipt Number: 186791",
  html: `
    <p><strong>Receipt Number:</strong> 186791</p>
    <p><strong>Customer:</strong> VUONG, DAT T.</p>
    <p><strong>Student Account Online Payments</strong></p>
    <p><strong>Date:</strong> 05/05/2024</p>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Description</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Tuition and Fees</td>
        <td>$250.00</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>$250.00</strong></td>
      </tr>
    </table>
    <p><strong>Payments Received</strong></p>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>Amount</th>
        <td>$250.00</td>
      </tr>
      <tr>
        <td>ACH</td>
        <td>Checking Account XXXXXX4218</td>
      </tr>
      <tr>
        <td>Routing</td>
        <td># ... PNC BANK, OHIO, PITTSBURGH, PA</td>
      </tr>
        <td><strong>Total</strong></td>
        <td><strong>$250.00</strong></td>
      </tr>
    </table>
    <p>Thank you for the payment.</p>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
