require('dotenv').config()
const { PORT, MONGODB_URI } = process.env;
const express = require('express');
const app = express();
const postController = require('./controllers/post');
const cors = require("cors")
const morgan = require("morgan")

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



//Routes

// app.get("/", (req, res) => {
//     res.send('Hello World')
// });

app.use('/', postController);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
