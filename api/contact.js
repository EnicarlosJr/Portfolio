export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = request.body || {}

    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Missing required fields' })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return response.status(400).json({ error: 'Invalid email' })
    }

    // Ready for providers such as Resend, SendGrid or Postmark.
    // In this portfolio version we return success so static previews do not break.
    return response.status(200).json({
      ok: true,
      message: 'Contact request received',
      lead: {
        name: String(name).slice(0, 120),
        email: String(email).slice(0, 160),
        message: String(message).slice(0, 2000),
      },
    })
  } catch (error) {
    return response.status(500).json({ error: 'Unexpected contact error' })
  }
}
