const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get("/say", async (req, res) => {
    try {
        if (!query.keyword) {
            return res.status(400).json({ Error: 'Please enter the correct keyword' });
        }
    var testing = req.query.keyword;
    var msg =  await axios.get('https://wv4opk0su2.execute-api.us-east-1.amazonaws.com/saikumargarimella/say?keyword=' + testing );
  
    res.send(msg.data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`)
    });