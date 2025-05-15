const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/alchemy-impact', async (req, res) => {
  const response = await fetch('https://plasticbankproduction.cognitionfoundry.io/ws/impact/totals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'PBApiKey': 'DEIN_API_KEY' // 👉 Hier deinen echten API-Key einsetzen
    },
    body: JSON.stringify({
      clientID: 'DEINE_CLIENT_ID' // 👉 Hier deinen echten Client-ID einsetzen
    })
  });

  const data = await response.json();
  res.json(data.Global);
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
