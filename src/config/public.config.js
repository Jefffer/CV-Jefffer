/**
 * Public Configuration
 * 
 * IMPORTANT: This file contains PUBLIC keys that are safe to expose in the frontend.
 * These keys are designed to be visible in the browser and version control.
 * 
 * ✅ SAFE TO COMMIT TO GIT
 * ✅ WORKS IN PRODUCTION (Vercel, Netlify, etc.)
 * 
 * Security Notes:
 * - EmailJS Public Key: Safe to expose, has rate limiting and domain restrictions
 * - reCAPTCHA Site Key: Safe to expose, designed for client-side use
 * 
 * ⚠️ IMPORTANT: Configure domain restrictions in respective dashboards:
 * 
 * EmailJS Dashboard (https://dashboard.emailjs.com/admin):
 *   1. Go to Email Services → Your Service → Settings
 *   2. Add allowed domains (localhost, yourdomain.com)
 *   3. Save changes
 * 
 * reCAPTCHA Admin (https://www.google.com/recaptcha/admin):
 *   1. Select your site
 *   2. Add domains to whitelist
 *   3. Save changes
 * 
 * Without domain restrictions, anyone can use your quota/keys!
 * 
 * For Fork Users:
 * - Replace these values with your own keys
 * - Get EmailJS keys: https://www.emailjs.com/
 * - Get reCAPTCHA key: https://www.google.com/recaptcha/admin/create
 * 
 * See SECURITY.md for detailed security guidelines.
 */

const publicConfig = {
  // EmailJS Configuration
  // Get your keys from: https://dashboard.emailjs.com/
  emailjs: {
    serviceId: "service_2j4ig4n",
    templateId: "template_vcmt7eb",
    publicKey: "HBocGiWPceGhGPSWU"
  },

  // Google reCAPTCHA v3
  // Get your site key from: https://www.google.com/recaptcha/admin/create
  recaptcha: {
    siteKey: "6LeiICcsAAAAAJBO2ETsaZuwUPBUIfHF1u9vw-Ir"
  }
};

export default publicConfig;
