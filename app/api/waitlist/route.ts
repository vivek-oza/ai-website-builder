import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

// Helper to validate email format
function isValidEmail(email: string) {
  return /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email);
}

// Simple branded HTML template (Gmail-safe)
function waitlistHtml(opts: { name?: string; brand?: { primary: string; site: string } }) {
  const name = opts.name?.trim() || "there";
  const primary = opts.brand?.primary || "#C3F400";
  const site = opts.brand?.site || "buildship.in";
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Welcome to Buildship</title>
      <style>
        body { margin:0; padding:0; background:#0b0b0b; color:#eaeaea; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .container { max-width:640px; margin:0 auto; padding:32px 24px; }
        .badge { display:inline-block; padding:6px 10px; border:1px solid rgba(255,255,255,0.12); border-radius:999px; background:rgba(255,255,255,0.04); color:#9ca3af; font-size:12px; margin-bottom:20px; }
        h1 { font-size:28px; line-height:1.2; margin:0 0 12px; font-weight:800; }
        .accent { color:${primary}; }
        p { margin:0 0 14px; color:#cfcfcf; }
        .card { background:linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; margin:16px 0; }
        .cta { display:inline-block; background:${primary}; color:#111; text-decoration:none; font-weight:700; padding:12px 18px; border-radius:10px; }
        .muted { color:#9aa0a6; font-size:12px; }
        .hr { height:1px; background:rgba(255,255,255,0.08); border:0; margin:24px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="badge">AI‑Powered Website Builder</span>
        <h1>You're on the <span class="accent">Buildship</span> waitlist 🎉</h1>
        <p>Hey ${name}, thanks for joining! You're early — and that comes with perks.</p>
        <div class="card">
          <p><strong>What's coming your way:</strong></p>
          <ul style="margin:10px 0 0 18px; padding:0;">
            <li>Exclusive freebies and UI kits</li>
            <li>Early access to new AI features</li>
            <li>Launch surprises and shortcuts to ship faster</li>
          </ul>
        </div>
        <p>We’ll email you soon with goodies. Meanwhile, keep an eye on <a style="color:${primary}; text-decoration:none;" href="https://${site}">${site}</a>.</p>
        <p style="margin-top:20px"><a class="cta" href="https://${site}">Visit Buildship</a></p>
        <hr class="hr" />
        <p class="muted">You received this because you signed up to the waitlist. If this wasn’t you, ignore this email.</p>
      </div>
    </body>
  </html>`;
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json().catch(() => ({}));

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // Prefer Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM || process.env.EMAIL_FROM || "onboarding@resend.dev";
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : undefined;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    const to = process.env.EMAIL_TO || "buildship.in@gmail.com";
    const from = resendFrom || `Waitlist Bot <no-reply@${host || "example.com"}>`;

    let sent = false;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const subject = `New waitlist signup: ${email}`;
      const text = `New waitlist joiner\n\nEmail: ${email}\nName: ${name || "-"}\nTime: ${new Date().toISOString()}`;
      const admin = await resend.emails.send({ from, to, subject, text });
      if (!admin.error) sent = true;

      // Send confirmation to the joiner
      const welcomeSubject = "You're on the Buildship waitlist ✨";
      const html = waitlistHtml({ name, brand: { primary: "#C3F400", site: "www.buildship.in" } });
      await resend.emails.send({ from, to: email, subject: welcomeSubject, html });
    } else if (host && port && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: { user, pass },
      });

      const subject = `New waitlist signup: ${email}`;
      const text = `New waitlist joiner\n\nEmail: ${email}\nName: ${name || "-"}\nTime: ${new Date().toISOString()}`;

      await transporter.sendMail({ from, to, subject, text });
      sent = true;

      // Basic HTML welcome via SMTP as fallback
      await transporter.sendMail({
        from,
        to: email,
        subject: "You're on the Buildship waitlist ✨",
        html: waitlistHtml({ name, brand: { primary: "#C3F400", site: "www.buildship.in" } }),
      });
    } else {
      console.warn("[waitlist] Email not configured. Set RESEND_API_KEY (recommended) or SMTP vars (EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS).");
    }

    return NextResponse.json({ ok: true, sent });
  } catch (err) {
    console.error("[waitlist] error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
