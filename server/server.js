const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.resolve(__dirname, './.env') });
}
const PORT = process.env.PORT || 3002;
const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post('/api/plaid/link/token', async (req, res) => {
  const url = 'https://development.plaid.com/link/token/create';
  const headers = {
    'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
    'PLAID-SECRET': process.env.PLAID_SECRET,
  };
  const data = {
    'user': {
      // This should correspond to a unique id for the current user.
      'client_user_id': 'user-id'
    },
    'client_name': 'Budget Forecast',
    'products': ['auth', 'transactions'],
    'country_codes': ['US'],
    'language': 'en'
  }
  axios.post(url, data, { headers: headers })
    .then(function (response) {      
      res.json({ 'token': response.data['link_token'] });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});