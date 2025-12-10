# 🔐 reCAPTCHA v3 Setup Guide

This project uses **Google reCAPTCHA v3** to protect the contact form from spam and abuse.

## 📋 Prerequisites

You need a Google account to create reCAPTCHA keys.

## 🚀 Setup Instructions

### Step 1: Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Sign in with your Google account
3. Register a new site with these settings:
   - **Label**: Your site name (e.g., "My CV Portfolio")
   - **reCAPTCHA type**: Select **"reCAPTCHA v3"**
   - **Domains**: Add your domain(s)
     - For local development: `localhost`
     - For production: `yourdomain.com`
   - Accept the reCAPTCHA Terms of Service
4. Click **"Submit"**

### Step 2: Copy Your Keys

After registration, you'll receive two keys:
- **Site Key** (Public) - Used in the frontend
- **Secret Key** (Private) - Used for server-side verification (not needed for this setup)

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder with your **Site Key**:
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_actual_site_key_here
   ```

3. **IMPORTANT**: Never commit `.env` to version control (already in `.gitignore`)

### Step 4: Restart Development Server

If the dev server is running, restart it to load the new environment variables:
```bash
npm run dev
```

## 🧪 Testing

### Local Testing
- reCAPTCHA v3 works on localhost without additional configuration
- Open your contact form and submit it
- Check browser console for any reCAPTCHA errors

### Production Testing
- Deploy your site
- Add your production domain to reCAPTCHA admin console
- Test the contact form in production

## 🔍 How It Works

1. **Invisible Protection**: reCAPTCHA v3 runs in the background without user interaction
2. **Score-Based**: Google assigns a score (0.0 - 1.0) to each request
   - 1.0: Very likely a human
   - 0.0: Very likely a bot
3. **Form Submission**: 
   - When user submits the form, reCAPTCHA generates a token
   - Token is validated (in this setup, validated by Google automatically)
   - If valid, email is sent via EmailJS

## ⚙️ Configuration Options

### Adjust reCAPTCHA Badge Position

By default, the reCAPTCHA badge appears in the bottom-right corner. To customize:

Add to your global CSS:
```css
/* Hide badge (not recommended - must show privacy policy link) */
.grecaptcha-badge { 
  visibility: hidden; 
}

/* Move badge to bottom-left */
.grecaptcha-badge { 
  left: 4px !important;
  right: auto !important;
}
```

⚠️ **If you hide the badge**, you MUST include this text on your contact page:
> "This site is protected by reCAPTCHA and the Google [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms) apply."

### Adjust Score Threshold (Advanced)

For more control, implement server-side verification:
1. Send the reCAPTCHA token to your backend
2. Verify token with Google's API
3. Check if score > 0.5 (adjust threshold as needed)
4. Return success/failure to frontend

## 🛡️ Security Best Practices

✅ **DO:**
- Keep Site Key in environment variables
- Use domain restrictions in reCAPTCHA admin
- Monitor reCAPTCHA admin console for suspicious activity
- Test thoroughly in production

❌ **DON'T:**
- Commit `.env` file to version control
- Share your Secret Key publicly
- Disable reCAPTCHA in production

## 📚 Resources

- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [react-google-recaptcha-v3 Library](https://github.com/t49tran/react-google-recaptcha-v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

## 🐛 Troubleshooting

### "executeRecaptcha is not ready"
- Ensure `GoogleReCaptchaProvider` wraps your entire app
- Check that Site Key is correctly set in `.env`
- Restart dev server after changing `.env`

### "Invalid site key"
- Verify Site Key in `.env` matches reCAPTCHA admin console
- Check domain is whitelisted in reCAPTCHA settings

### reCAPTCHA not loading
- Check browser console for errors
- Verify internet connection
- Clear browser cache
- Disable ad blockers (they may block reCAPTCHA)

### Testing in Development
- reCAPTCHA v3 works on `localhost` without special configuration
- Use test keys for automated testing (see Google docs)

## 📝 Notes

- This implementation uses **client-side validation only**
- For production apps with high security needs, add **server-side verification**
- reCAPTCHA v3 is invisible but adds a small badge to your page (can be customized)
- Free tier: 1 million assessments/month
