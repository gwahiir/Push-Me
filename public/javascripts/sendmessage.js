var sendMessage = {};
var http = require('http');

sendMessage.connectGCM = function() {

    var options = {
        hostname: 'gcm-http.googleapis.com',
        path: '/gcm/send',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AIzaSyA8YsnV2vT7_HhASXuoClTbyKoOqM4PUec'
        }
    };

    var req = http.request(options, function(res) {
        console.log("status: " + res.statusCode);
        console.log("Headers: " + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log("Body: " + body);
        });
    });

    req.on('error', function(e) {
        console.log("problem with request: " + e.message);
    });

    req.write('{ "to" : "APA91bEJ75Q5JgI8jQDWJy2HsqE-NuWRbWMKp75VNllh9R1qtz4WizKZwvETr90jyV8uNNzsn34lib9CoqkXv5L_mu1ya35DSYsvyhbv8CfMx1GcYLC6S5whuLd6iA7TJXqLjcTkQpJr_AQhPA2iAyVOXXwfJofDcg", "string":"hello world"}');
    req.end();


};

sendMessage.testone = function() {
    console.log("test!!!");
};

sendMessage.testtwo = function() {
    console.log("test numero 2!!!");
};

/* sendMessage.connectGCM = function() {
    console.log("method activated");
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    
    xhttp.onreadystatechange = function() {
        
    if (this.readyState == 4 && this.status == 200) {
        console.log("SUCCESS!!!");
        console.log(xhttp.responseText);
    }
    };
    xhttp.open("POST", "https://gcm-http.googleapis.com/gcm/send", true);
    xhttp.setRequestHeader("Content-Type: application/json", "Authorization:AAAACf1PipQ:APA91bGuc1Xm-z2VM-ziTYyYRZNRV-rlu_1X8VPzhkvVaB3ZTk3MIKc3ASJb44VYUIHVhmXfuex6Nk-ASdPg1uA76jsB_K1CgiVN4LXPdhchIKC-xlsY-ijTTr452hghKzcFwcuuGUzD", {
        "to" : "APA91bEJ75Q5JgI8jQDWJy2HsqE-NuWRbWMKp75VNllh9R1qtz4WizKZwvETr90jyV8uNNzsn34lib9CoqkXv5L_mu1ya35DSYsvyhbv8CfMx1GcYLC6S5whuLd6iA7TJXqLjcTkQpJr_AQhPA2iAyVOXXwfJofDcg", "data" : {},
    });
    console.log("works??");
    xhttp.send("{}");
    console.log(xhttpp.onreadystatechange);
    console.log("Response is - " + xhttp.response);


}; */

module.exports = sendMessage;