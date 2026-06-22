const nodemailer = require('nodemailer');

const sendLeadNotification = async (contact) => {
  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');
  const notifyEmail = process.env.NOTIFY_EMAIL?.trim() || emailUser;
  const clientEmail = contact.email?.trim();

  if (!emailUser || !emailPass) {
    console.warn('Email notification skipped: EMAIL_USER or EMAIL_PASS is missing.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: emailUser, pass: emailPass },
    pool: true,
    maxConnections: 1,
    maxMessages: 5,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });

  try {
    const ownerHtml = `
      <h2>New lead from Praveen Studio website</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${clientEmail || '-'}</p>
      <p><strong>Business:</strong> ${contact.business || '-'}</p>
      <p><strong>Project type:</strong> ${contact.projectType}</p>
      <p><strong>Budget:</strong> ${contact.budget || '-'}</p>
      <p><strong>Timeline:</strong> ${contact.timeline || '-'}</p>
      <p><strong>Description:</strong><br/>${contact.description}</p>
    `;

    await transporter.sendMail({
      from: `"Praveen Studio Website" <${emailUser}>`,
      to: notifyEmail,
      replyTo: clientEmail || emailUser,
      subject: `New lead: ${contact.name} (${contact.projectType})`,
      html: ownerHtml,
    });

    if (clientEmail && clientEmail !== notifyEmail) {
      await transporter.sendMail({
        from: `"Praveen Studio Website" <${emailUser}>`,
        to: clientEmail,
        replyTo: notifyEmail,
        subject: 'We received your project inquiry',
        html: `
          <h2>Thanks for reaching out!</h2>
          <p>Hi ${contact.name},</p>
          <p>We have received your request for <strong>${contact.projectType}</strong>.</p>
          <p>Our team will review your details and get back to you soon.</p>
          <p><strong>Submitted details:</strong></p>
          <ul>
            <li>Phone: ${contact.phone}</li>
            <li>Email: ${clientEmail}</li>
            <li>Business: ${contact.business || 'N/A'}</li>
          </ul>
        `,
      });
    }

    console.log('Lead email sent successfully to', notifyEmail, clientEmail ? `and ${clientEmail}` : '');
  } catch (error) {
    console.error('Email notification failed:', error.message);
    console.error(error.stack);
    throw error;
  }
};

module.exports = { sendLeadNotification };
