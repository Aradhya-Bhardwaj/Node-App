const express = require('express');
const app = express();
const PORT = 30000;

app.get('/', (req, res) => {
    res.send('Hello Aradhya Bhardwaj!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 