const app = require('express')();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '789zxc'
}, app)
.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Local DevServer Started on port 3000');
});
