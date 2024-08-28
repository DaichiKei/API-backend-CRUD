const express = require('express');
const users = require('./routes/users');
const cors = require('cors');

app = express();
app.use(cors())
app.use(express.json());
const port = 4000;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})

app.use('/users', users);