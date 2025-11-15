# Email Setup Instructions

To enable the contact form to send emails directly, you need to set up EmailJS (free service).

## Steps:

1. Go to https://www.emailjs.com/ and create a free account
2. Create an Email Service:
   - Go to "Email Services" → "Add New Service"
   - Choose Gmail (or your email provider)
   - Connect your email account (rk@dhanvada.com)
   - Copy your Service ID

3. Create an Email Template:
   - Go to "Email Templates" → "Create New Template"
   - Use this template:
     ```
     From: {{from_email}}
     Phone: {{phone}}
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: rk@dhanvada.com
   - Set "Subject" to: New Contact Form Submission
   - Copy your Template ID

4. Get your Public Key:
   - Go to "Account" → "General"
   - Copy your Public Key

5. Update script.js:
   - Replace `YOUR_PUBLIC_KEY` with your Public Key
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

After setup, the form will send emails directly without opening the email client!

