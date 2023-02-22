const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server live')
});

app.get('/*', (req, res) => {
    res.err('Route does not exists')
});

//express error handler, receives (err) and console.logs/sends the error
app.use((err, req, res) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Inside port ${PORT}`)
});

module.exports = app;