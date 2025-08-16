export async function sendEmail({ from, subject, text, html }) {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;
  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS || !MAIL_TO) {
    return { skipped: true };
  }
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: Number(MAIL_PORT) === 465,
    auth: { user: MAIL_USER, pass: MAIL_PASS }
  });

  const info = await transporter.sendMail({
    from: `"Portfolio Bot" <${MAIL_USER}>`,
    to: MAIL_TO,
    replyTo: from,
    subject,
    text,
    html
  });

  return { messageId: info.messageId };
}
