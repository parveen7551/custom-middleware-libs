var request = require("request");
var userDetails;
//import request from 'request';

function getData(url) {    
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

var errHandler = function(err) {
    console.log(err);
}

function main() {
    var url = "https://api.github.com/users/parveen7551";
    var dataPromise = getData(url);    
    dataPromise.then(JSON.parse, errHandler)               
                .then(function(data) {
                    console.log(data)
                }, errHandler);
}

main();