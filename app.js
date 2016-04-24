var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var url = require("url");

app.use(bodyParser.urlencoded({extended: true}));

var port = 80;

var router = express.Router();

router.post("/play", function(req, res){
    var videoUrl = url.parse(req.body.url);
    var videoHost = videoUrl.hostname.toLowerCase();
    
    if(videoHost == "www.youtube.com" || videoHost == "youtube.com" || videoHost == "youtu.be"){
        console.log("youtube video");
    }else if(videoHost == "twitch.tv"){
        console.log("twitch stream");
    }else{
        console.log("host unsupported: " + videoHost);
    }
    res.sendStatus(200);
    
});

app.use("/", router);

app.listen(port);
console.log("LazyBox running...");