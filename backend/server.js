const cors = require('cors');
const express = require('express');
const DB = require('./config/db');
// init DB
DB();
// Routes
const usersRouter = require('./routes/user');
const plansRouter = require('./routes/plan')
//
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use("/api", router);
app.use("/users",usersRouter);
app.use("/plans",plansRouter)

router.get('/', (req, res) => {
  res.send('OwnShopAPI te da la bienvenida');
});
app.use(router);















app.listen(8888, () => console.log(`Server runing on port 8888`));