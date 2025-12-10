# 🔐 Security Guide

## Public Keys Configuration

This project uses **public API keys** that are safe to expose in the frontend code and version control. These keys are stored in `src/config/public.config.js`.

## Why Public Keys are Safe

### EmailJS Keys
- **Service ID, Template ID, and Public Key** are designed to be exposed in client-side code
- EmailJS has built-in protections:
  - Rate limiting (200 emails/month on free tier)
  - Domain restrictions (configure in dashboard)
  - Email template controls
  - Usage monitoring and alerts

### reCAPTCHA Site Key
- The **Site Key** is specifically designed for public exposure
- It only allows generating verification tokens, not validating them
- Server-side validation happens on Google's servers
- Can be restricted by domain in Google reCAPTCHA admin

## 🛡️ Required Security Configurations

### 1. EmailJS Dashboard Setup

**IMPORTANT**: Configure these settings in [EmailJS Dashboard](https://dashboard.emailjs.com/admin):

1. **Domain Restrictions**:
   - Go to "Email Services" → Your Service → "Settings"
   - Add your allowed domains:
     ```
     localhost
     yourdomain.com
     www.yourdomain.com
     ```
   - Block all other domains

2. **Template Settings**:
   - Review your email template
   - Use template variables instead of allowing arbitrary content
   - Enable "Auto-Reply" if needed

3. **Rate Limiting**:
   - Monitor usage in dashboard
   - Set up email alerts for suspicious activity
   - Consider upgrading plan if needed

### 2. Google reCAPTCHA Setup

**IMPORTANT**: Configure these settings in [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin):

1. **Domain Restrictions**:
   - Add your domains to the whitelist:
     ```
     localhost
     yourdomain.com
     ```
   - Google automatically blocks requests from unauthorized domains

2. **Score Threshold**:
   - reCAPTCHA v3 uses scores (0.0 - 1.0)
   - Default threshold is 0.5
   - Monitor scores in admin console
   - Adjust if getting false positives/negatives

3. **Security Preferences**:
   - Enable "Use Checkbox Challenge as a fallback"
   - Enable security preference settings
   - Review analytics regularly

## 🚫 What NOT to Expose

Never commit these to version control:
- ❌ EmailJS **Private/Secret Keys** (if you use server-side features)
- ❌ reCAPTCHA **Secret Key** (used for server-side verification)
- ❌ Database credentials
- ❌ API keys with write/admin permissions
- ❌ OAuth secrets
- ❌ Payment gateway keys

These would be in `.env` (already gitignored) if needed.

## 📝 For Fork Users

If you fork this repository, update `src/config/public.config.js` with your own keys:

```javascript
const publicConfig = {
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
  },
  recaptcha: {
    siteKey: "YOUR_RECAPTCHA_SITE_KEY"
  }
};
```

## 🔍 Monitoring

### EmailJS
- Check [Dashboard](https://dashboard.emailjs.com/) regularly
- Review email logs for suspicious patterns
- Monitor quota usage
- Set up email alerts

### reCAPTCHA
- Check [Admin Console](https://www.google.com/recaptcha/admin) weekly
- Review score distribution
- Check for unusual traffic patterns
- Verify domain restrictions are active

## 🚨 What to Do If Keys are Compromised

### If Someone Abuses Your EmailJS Quota:
1. Regenerate your Public Key in EmailJS dashboard
2. Update `src/config/public.config.js`
3. Redeploy your application
4. Review and tighten domain restrictions

### If reCAPTCHA is Bypassed:
1. Lower score threshold in your validation logic
2. Enable additional security features
3. Consider switching to reCAPTCHA v2 (with checkbox)
4. Review domain restrictions

## ✅ Best Practices Checklist

- [ ] Domain restrictions configured in EmailJS
- [ ] Domain restrictions configured in reCAPTCHA
- [ ] Email template uses variables (not raw input)
- [ ] Regular monitoring of usage/logs
- [ ] Email alerts set up for quota limits
- [ ] reCAPTCHA score threshold optimized
- [ ] No sensitive data in email templates
- [ ] Contact form has client-side validation
- [ ] Rate limiting tested and working

## 📚 Additional Resources

- [EmailJS Security Best Practices](https://www.emailjs.com/docs/security/)
- [reCAPTCHA Best Practices](https://developers.google.com/recaptcha/docs/best-practices)
- [OWASP Frontend Security](https://owasp.org/www-project-web-security-testing-guide/)

## 🤔 FAQ

**Q: Can someone steal my EmailJS quota?**  
A: Only if you don't configure domain restrictions. With proper restrictions, only your domains can use the keys.

**Q: Should I rotate these keys regularly?**  
A: Not necessary unless you detect abuse. Domain restrictions are the primary protection.

**Q: What if I need server-side email sending?**  
A: Use a backend with secret keys in environment variables (never commit these).

**Q: Is client-side validation enough?**  
A: For a portfolio/CV site, yes. For production apps handling sensitive data, add server-side validation.
