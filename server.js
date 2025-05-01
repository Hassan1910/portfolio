import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend('re_ZxaKmj1W_9SZEsDbbsqjzYDsM8TakVGb4');

app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received form submission:', req.body);

    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      console.error('Missing required fields:', { name, email, message });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Sending email with Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'chizicheza@gmail.com', // Using the verified email address
      replyTo: email,
      subject: subject ? `${subject} - Message from ${name}` : `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ error: error.message });
    }

    console.log('Email sent successfully:', data);
    return res.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Test the Resend API key on startup
const testResendApiKey = async () => {
  try {
    console.log('Testing Resend API key...');
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'chizicheza@gmail.com', // Using the verified email address
      subject: 'Testing Resend API Connection',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the Resend API connection is working.</p>
        <p>The contact form now includes a phone number field.</p>
      `,
    });

    if (error) {
      console.error('Resend API test failed:', error);
    } else {
      console.log('Resend API test successful:', data);
    }
  } catch (error) {
    console.error('Error testing Resend API:', error);
  }
};

// Run the test
testResendApiKey();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});