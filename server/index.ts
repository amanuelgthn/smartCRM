import express from 'express';

const app = express();
const PORT = 5173;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
