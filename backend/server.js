const cors = require('cors');
const express = require('express');
const DB = require('./config/db');
// init DB
DB();
// Routes
const usersRouter = require('./routes/user');
const plansRouter = require('./routes/plan');
const companyRouter = require('./routes/company');
const storesRouter = require('./routes/store');
const templatesRouter = require('./routes/templates');
const storePagesRouter = require('./routes/storePage');
const productRouter = require('./routes/products')
//Confs
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
app.use(cors({origin:'*'}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit:'50mb'}));
app.use(express.static('public'))



app.use("/api", router);
app.use("/users",usersRouter);
app.use("/plans",plansRouter);
app.use("/company",companyRouter);
app.use("/store",storesRouter);
app.use("/template",templatesRouter);
app.use("/storepage",storePagesRouter);
app.use("/product",productRouter);

router.get('/', (req, res) => {
  res.send('OwnShopAPI te da la bienvenida');
});
app.use(router);















app.listen(8888, () => console.log(`Server runing on port 8888`));