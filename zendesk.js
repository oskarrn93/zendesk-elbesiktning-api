import axios from 'axios'

export const createTicket = async ({ subject, description, name, email }) => {
  const url = `${process.env.ZENDESK_URL}/api/v2/tickets.json`
  const data = {
    ticket: {
      subject,
      description,
      requester: {
        name,
        email,
      },
    },
  }

  const config = {
    headers: { Authorization: `Basic ${process.env.ZENDESK_AUTH}` },
  }
  const response = await axios.post(url, data, config)
  console.log(response)
}
