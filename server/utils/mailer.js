const nodemailer = require('nodemailer');

// Sends an email notification when a new lead comes in.
// Silently does nothing if EMAIL_USER / EMAIL_PASS aren't set in .env —
// this keeps the contact form working even before email is configured.
const sendLeadNotification = async (contact) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const html = `
    <h2>New lead from Praveen Studio website</h2>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Phone:</strong> ${contact.phone}</p>
    <p><strong>Email:</strong> ${contact.email || '-'}</p>
    <p><strong>Business:</strong> ${contact.business || '-'}</p>
    <p><strong>Project type:</strong> ${contact.projectType}</p>
    <p><strong>Budget:</strong> ${contact.budget || '-'}</p>
    <p><strong>Timeline:</strong> ${contact.timeline || '-'}</p>
    <p><strong>Description:</strong><br/>${contact.description}</p>
  `;

  await transporter.sendMail({
    from: `"Praveen Studio Website" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
    subject: `New lead: ${contact.name} (${contact.projectType})`,
    html,
  });
};

module.exports = { sendLeadNotification };
