export async function createContact(req, res) {
  try {
    const { name, email, subject, message, website } = req.body; // 'website' is honeypot

    // Honeypot: if filled -> likely bot
    if (website && website.trim() !== "") {
      return res.status(200).json({ success: true }); // pretend OK, don't process
    }

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    // very light email sanity
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email." });
    }

    const doc = await Contact.create({ name, email, subject, message });

    try {
      await sendEmail({
        from: email,
        subject: `New portfolio message: ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `
          <div style="font-family:system-ui,Arial,sans-serif">
            <h2>New portfolio message</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr/>
            <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
          </div>
        `
      });
    } catch (e) {
      console.warn("Email failed:", e.message);
    }

    res.status(201).json({ success: true, data: { id: doc._id } });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
}
