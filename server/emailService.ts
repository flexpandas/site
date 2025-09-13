import { MailService } from '@sendgrid/mail';

// Initialize mail service only when needed
let mailService: MailService | null = null;

function initializeMailService(): boolean {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('⚠️  SENDGRID_API_KEY not configured - emails will be skipped');
    return false;
  }
  
  if (!mailService) {
    mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
  }
  return true;
}

// HTML escape function to prevent injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Convert newlines to <br> tags after escaping HTML
function formatMessage(text: string): string {
  return escapeHtml(text).replace(/\n/g, '<br>');
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Check if email service is configured
  if (!initializeMailService()) {
    return false;
  }
  
  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };

    if (params.text) {
      emailData.text = params.text;
    }

    if (params.html) {
      emailData.html = params.html;
    }

    await mailService!.send(emailData);
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', {
      message: error.message,
      code: error.code,
      response: error.response?.body,
      to: params.to,
      from: params.from,
    });
    
    // Log specific error details for debugging
    if (error.code === 403) {
      console.error('SendGrid 403 Error: This usually means:');
      console.error('1. Sender email not verified with SendGrid');
      console.error('2. API key lacks sufficient permissions');
      console.error('3. Account needs domain authentication');
      console.error(`Current sender email: ${params.from}`);
      console.error('Please verify your sender email in SendGrid dashboard');
    }
    
    return false;
  }
}

// Configuration - replace with your verified SendGrid sender email
const SENDER_EMAIL = process.env.SENDGRID_SENDER_EMAIL || 'hello@flexpandas.com';

// Email templates for contact form automation
export async function sendWelcomeEmail(userEmail: string, userName: string): Promise<boolean> {
  const emailContent = {
    to: userEmail,
    from: SENDER_EMAIL, // Using verified sender email
    subject: '🐼 Welcome to Flexpandas - Your Automation Journey Starts Here!',
    text: `Hi ${escapeHtml(userName)},

Thank you for reaching out to Flexpandas! We're excited to help you save 20+ hours every month through smart automation.

Here's what happens next:
- Our team will review your message within 24 hours
- We'll send you a personalized audit checklist based on your business type
- If it's a good fit, we'll schedule your free 15-minute strategy call

While you wait, here are some quick wins you can implement today:
1. Set up Google Workspace automation rules for your emails
2. Use Zapier to connect your most-used tools
3. Create templates for your most common responses

Looking forward to transforming your business operations!

Best regards,
The Flexpandas Team 🐼

P.S. Follow us on social media for daily automation tips:
- LinkedIn: linkedin.com/company/flexpandas  
- Instagram: @flexpandas`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #10B981; font-size: 28px; margin: 0;">🐼 Welcome to Flexpandas</h1>
        <p style="color: #6B7280; font-size: 18px; margin: 10px 0;">Your Automation Journey Starts Here!</p>
      </div>
      
      <div style="background: #F9FAFB; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
        <p style="margin: 0 0 15px 0; color: #374151;">Hi <strong>${escapeHtml(userName)}</strong>,</p>
        <p style="margin: 0; color: #374151;">Thank you for reaching out to Flexpandas! We're excited to help you <strong>save 20+ hours every month</strong> through smart automation.</p>
      </div>
      
      <h2 style="color: #1F2937; font-size: 22px; margin: 25px 0 15px 0;">What happens next:</h2>
      <ul style="color: #374151; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Our team will review your message within 24 hours</li>
        <li style="margin-bottom: 8px;">We'll send you a personalized audit checklist based on your business type</li>
        <li style="margin-bottom: 8px;">If it's a good fit, we'll schedule your free 15-minute strategy call</li>
      </ul>
      
      <div style="background: #EFF6FF; border-left: 4px solid #10B981; padding: 20px; margin: 25px 0;">
        <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">Quick wins you can implement today:</h3>
        <ol style="color: #374151; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Set up Google Workspace automation rules for your emails</li>
          <li style="margin-bottom: 8px;">Use Zapier to connect your most-used tools</li>
          <li style="margin-bottom: 8px;">Create templates for your most common responses</li>
        </ol>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://calendly.com/flexpandas" style="background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Book Your Free Strategy Call</a>
      </div>
      
      <p style="color: #374151; margin: 25px 0 15px 0;">Looking forward to transforming your business operations!</p>
      
      <p style="color: #374151; margin: 0 0 5px 0;"><strong>Best regards,</strong><br>The Flexpandas Team 🐼</p>
      
      <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; margin-top: 30px; text-align: center;">
        <p style="color: #6B7280; font-size: 14px; margin: 0 0 15px 0;"><strong>P.S.</strong> Follow us on social media for daily automation tips:</p>
        <div style="text-align: center;">
          <a href="#" style="color: #10B981; text-decoration: none; margin: 0 10px;">LinkedIn</a>
          <a href="#" style="color: #10B981; text-decoration: none; margin: 0 10px;">Instagram</a>
        </div>
      </div>
    </div>
    `
  };

  return await sendEmail(emailContent);
}

// Internal notification email for new contact submissions
export async function sendInternalNotification(contactData: {
  name: string;
  email: string;
  businessType?: string;
  message: string;
}): Promise<boolean> {
  const emailContent = {
    to: process.env.TEAM_EMAIL || SENDER_EMAIL,
    from: SENDER_EMAIL, // Using verified sender email
    subject: `🎯 New Contact Form Submission from ${escapeHtml(contactData.name)}`,
    text: `New contact form submission received:

Name: ${escapeHtml(contactData.name)}
Email: ${escapeHtml(contactData.email)}
Business Type: ${escapeHtml(contactData.businessType || 'Not specified')}
Message: ${escapeHtml(contactData.message)}

Please follow up within 24 hours.`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #10B981;">🎯 New Contact Form Submission</h1>
      
      <div style="background: #F9FAFB; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contactData.email)}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(contactData.businessType || 'Not specified')}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${formatMessage(contactData.message)}
        </div>
      </div>
      
      <div style="background: #FEF3CD; border: 1px solid #FCD34D; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <p style="margin: 0; color: #92400E;"><strong>Action Required:</strong> Please follow up within 24 hours.</p>
      </div>
    </div>
    `
  };

  return await sendEmail(emailContent);
}