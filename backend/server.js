
const cors = require('cors');
const authRoutes = require('./routes/user');
const express = require('express');
const DB = require('./config/db');
// init DB
DB();
// Routes
const usersRouter = require('./routes/user');
//
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
app.use("/users",usersRouter);

router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(8888, () => console.log(`Server runing on port 8888`));