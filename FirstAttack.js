const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dungnguyen_2025@depauw.edu",
    pass: "password",
  },
});

let mailOptions = {
  from: '"Payment Services" <paymentservicess@depauw.edu>',
  to: "students",
  subject: "New Statement Available on Transact Payments",
  html: `
        <p>A new statement was made available for viewing on Transact Payments but has not been viewed yet.</p>
        <p>To view the statement, please select “Statements” from the menu to the left on Transact.</p>
        <p>Students can view the statement by logging into e-Services and selecting the "Billing & Payments" link under the “Financial” menu.</p>
        <p>Please note that students must grant access to any third parties (parents, guardians, etc.) to view statements and make payments by inviting them to Transact. Invited payers can access Transact directly by navigating to: <a href="http://www.depauw.edu/thirdpartypay">www.depauw.edu/thirdpartypay</a></p>
        <p>To invite a payer, the student will need to:</p>
        <ul>
            <li>Select "Send Payer Invitation" on the profile page of Transact Payments.</li>
            <li>Complete the required information (including appropriate access) and an email will automatically be sent to the payer with the user name and temporary password.</li>
        </ul>
        <p>The following resources are available if you have any questions about the items on the statement:</p>
        <ul>
            <li>Questions about scholarships, loans, and grants? - Contact the Financial Aid Office: <a href="tel:765-658-4030">765-658-4030</a> or <a href="mailto:financialaid@depauw.edu">financialaid@depauw.edu</a></li>
            <li>Questions about class schedules, course requests, and transcripts? - Contact the Office of the Registrar: <a href="tel:765-658-4141">765-658-4141</a> or <a href="mailto:registrarsoffice@depauw.edu">registrarsoffice@depauw.edu</a></li>
            <li>Questions about meal plans and Board charges? - Contact DePauw Dining: <a href="mailto:depauwdining@depauw.edu">depauwdining@depauw.edu</a></li>
            <li>Questions about housing assignments and Room charges? - Contact Housing & Residence Life: <a href="tel:765-658-4500">765-658-4500</a> or <a href="mailto:housing@depauw.edu">housing@depauw.edu</a></li>
        </ul>
        <p>Please reach out with any questions or concerns and we will be happy to assist you.</p>
        <p>Payment Services<br>paymentservices@depauw.edu<br>765-658-4015</p>
    `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
