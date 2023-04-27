const express = require('express');
const bodyParser = require('body-parser'); //routes에 엑세스하는 req.body 만듦
const config = require('./config').db_connection;
const http = require('http');

const app = express();
const port = config.PORT;
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.json({ message:"hello world"});

});

//autoRoute
const autoRoute = require('./autoRoute');
autoRoute('/api',app);

const webServer = http.createServer(app);
//포트넘버 설정
webServer.listen(port,()=>{
    console.log("listening on port");
})