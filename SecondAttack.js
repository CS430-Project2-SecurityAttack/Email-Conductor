const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dungnguyen_2025@depauw.edu",
    pass: "password",
  },
});

let mailOptions = {
  from: '"DePauw HelpDesk" <helpdesk@depauw.edu>',
  to: "students",
  subject: "Attention DePauw University",
  html: `
        <p>Dear Students, Staff, and Faculty:</p>
        <p>If you receive an email with the subject “New Statement Available on Transact Payments” about missing payments or anything like that, do not open the attachments or files, do not click on any links or respond to it, as it is spam.</p>
        <p>Always be on alert for spam - If a message looks suspicious, it probably is suspicious!</p>

        <p>Send us a report document in the following to protect your information:<a href="https://depauw.famis.com/LB_Create_a_RequestElevate.asp"> Report Form</a> </p>
        <p>If you have received a suspicious email or shared file, we recommend the following:</p>
        <ul>
            <li>If you have given out financial information, immediately make a report to DePauw Police at (765) 658-5555 or <a href="mailto:police@depauw.edu">police@depauw.edu</a>.</li>
            <li>Do not respond to or click on any links or attachments.</li>
            <li>Select the suspicious email in your mailbox, then click Report spam to remove it from your account and to report it to Google.</li>
            <li>Change your Google Apps Account password immediately if you replied to a suspicious email or opened an attachment.</li>
            <li>Run a virus scan as a further precaution. Go to Securing devices to learn how you can download and run Symantec Endpoint Protection on your computer.</li>
        </ul>
        <p>Additional information is available at <a href="https://www.depauw.edu/it">Information Security</a>.</p>
        <p>Please let us know if you have any questions or concerns.</p>
        <p>Best,</p>
        <p>DePauw HelpDesk</p>
        <p>DePauw University, Information Services<br>Julian 163, 2 East Hanna Street, Greencastle, IN 46135-0037<br><a href="mailto:HelpDesk@depauw.edu">HelpDesk@depauw.edu</a> | 765-658-4294 | <a href="https://www.depauw.edu/it/helpdesk">depauw.edu/it/helpdesk</a><br>Find answers quickly online 24/7 at <a href="https://kb.depauw.edu">IT KnowledgeBase</a><br>Office Walk-in hours: Monday thru Friday from 10 a.m. to 4 p.m.<br>Email/phone support: Monday thru Friday from 8 a.m. to 5 p.m.</p>
        <p>Information Services emails are always sent from an "@depauw.edu" address with the name, email address, and telephone number of one of our staff members. Do not disclose confidential or personal information to an email address that is not from a "@depauw.edu" address or on a secure DePauw website that begins with <a href="https://www.depauw.edu">https://www.depauw.edu</a>. If you have questions about the legitimacy of an email, please contact the HelpDesk immediately.</p>
    `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
