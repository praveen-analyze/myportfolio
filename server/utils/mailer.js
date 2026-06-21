const nodemailer = require('nodemailer');

// Sends an email notification when a new lead comes in.
// Silently does nothing if EMAIL_USER / EMAIL_PASS aren't set in .env —
// this keeps the contact form working even before email is configured.
const sendLeadNotification = async (contact) => {
  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');
  const notifyEmail = process.env.NOTIFY_EMAIL?.trim() || emailUser;

  if (!emailUser || !emailPass) {
    console.warn('Email notification skipped: EMAIL_USER or EMAIL_PASS is missing.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: emailUser, pass: emailPass },
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
    from: `"Praveen Studio Website" <${emailUser}>`,
    to: notifyEmail,
    subject: `New lead: ${contact.name} (${contact.projectType})`,
    html,
  });
};

module.exports = { sendLeadNotification };
