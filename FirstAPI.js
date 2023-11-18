// var request = require('request');
//request('http://www.google.com', function (error, response, body) {
//    if(!error && response.statusCode == 200){
//        console.log(body); 
//    }
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//});
var request = require('request');
request('https://api.covidtracking.com/v1/us/current.json', function(error,response,body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body);
        console.log("Date: "+ parseData[0].date );
        console.log("States: "+ parseData[0].states );
        console.log("Current Positive cases of SARS-CoV-2 in US are: "+ parseData[0].positive );
        console.log("Current Positive cases of SARS-CoV-2 in US are: "+ parseData[0].positive );
        console.log("Current Pending reports of SARS-CoV-2 in US are: "+ parseData[0].pending );        
        console.log("Patient Hospitalized currently due to SARS-CoV-2 in US are: "+ parseData[0].hospitalizedCurrently );
        console.log("Total Deaths due to SARS-CoV-2 in US are: "+ parseData[0].death );    
    }
});