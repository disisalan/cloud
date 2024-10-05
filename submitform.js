const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Forward the request to your Google Apps Script endpoint
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbyp5OdbtvdSGya9s6HOZExTwyjqigvqTrKetLv3c1Q3hXkDzKziHgyrqVjXfCKLeneu4g/exec',
        req.body
      );
      res.status(200).json({ message: 'Data submitted successfully', data: response.data });
    } catch (error) {
      console.error('Error submitting data:', error);
      res.status(500).json({ message: 'Error submitting data', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
