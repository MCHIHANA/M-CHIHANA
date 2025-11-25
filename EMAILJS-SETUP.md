# EmailJS Setup Guide

Your contact form is now configured to send real emails to **Misheckgchihana@gmail.com**. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or any other email provider
4. Connect your Gmail account (Misheckgchihana@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to: {{from_email}}
```

4. Save the template
5. Copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (looks like: a random string)
3. Copy it

## Step 5: Update Your Code

Open `src/components/Contact.tsx` and replace these values:

```typescript
const serviceId = 'service_YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'template_YOUR_TEMPLATE_ID';  // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';             // Replace with your Public Key
```

## Step 6: Test the Form

1. Save the file
2. Refresh your portfolio at http://localhost:3000
3. Go to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email at Misheckgchihana@gmail.com

## Alternative: Use Environment Variables (Recommended)

For better security, create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the code to:

```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

## Features Included:

- Real email delivery to Misheckgchihana@gmail.com
- Success/error notifications
- Form validation
- Loading states
- Automatic form reset after successful send
- Reply-to address set to sender's email

## Troubleshooting:

**Emails not sending?**
- Check that all IDs are correct
- Verify your EmailJS account is active
- Check browser console for errors
- Make sure you're not exceeding the free tier limit (200/month)

**Gmail blocking emails?**
- Enable "Less secure app access" in Gmail settings
- Or use EmailJS's recommended OAuth2 setup

## Free Tier Limits:

- 200 emails per month
- No credit card required
- Perfect for portfolio contact forms

Your contact form is now ready to receive real messages!
