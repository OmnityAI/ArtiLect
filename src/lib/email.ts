type SendEmailInput = {
  to: string
  name?: string
}

// Sends a welcome email using Resend's HTTP API.
// Set RESEND_API_KEY and EMAIL_FROM (e.g., "Artilect <info@artilectai.com>") in env.
export async function sendWelcomeEmail({ to, name }: SendEmailInput): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM || 'Artilect <info@artilectai.com>'
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set; skipping welcome email dispatch')
    return { ok: false, error: 'RESEND_API_KEY missing' }
  }

  const subject = 'Welcome to Artilect Newsletter 🎉'
  const displayName = name?.trim() || 'there'
  const html = `
    <div style="font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;line-height:1.6;color:#e5e7eb;background:#0b0b10;padding:24px">
      <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="max-width:640px;margin:0 auto;background:#11131a;border:1px solid #1f2330;border-radius:12px">
        <tr>
          <td style="padding:28px 28px 8px 28px">
            <h1 style="margin:0;color:#f5f7fb;font-size:20px">Welcome aboard, ${displayName}! 🎉</h1>
            <p style="margin:10px 0 0 0;color:#a0a7b8;font-size:14px">
              You’re officially on the list. Expect weekly AI insights, research breakdowns, and practical takeaways from Artilect.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 8px 28px">
            <ul style="margin:12px 0;padding-left:18px;color:#a0a7b8;font-size:14px">
              <li>Expert-curated AI news and trends</li>
              <li>Actionable analysis for builders and leaders</li>
              <li>Occasional deep-dives and resources</li>
            </ul>
            <p style="margin:10px 0 0 0;color:#a0a7b8;font-size:14px">
              Tip: Add <strong>info@artilectai.com</strong> to your contacts so we always land in your inbox.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px 28px 28px">
            <a href="https://artilect.ai/#featured-topics" style="display:inline-block;background:linear-gradient(90deg,#7c5cff,#ffb86c);color:#0b0b10;text-decoration:none;font-weight:600;padding:10px 16px;border-radius:999px">Explore featured topics</a>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px 28px;color:#6b7280;font-size:12px">
            You’re receiving this because you subscribed at artilect.ai. If this wasn’t you, reply to let us know.
          </td>
        </tr>
      </table>
    </div>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
      }),
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      console.error('Resend error', res.status, body)
      return { ok: false, error: `HTTP ${res.status}` }
    }
    return { ok: true }
  } catch (err: any) {
    console.error('Resend exception', err)
    return { ok: false, error: err?.message || 'unknown' }
  }
}
