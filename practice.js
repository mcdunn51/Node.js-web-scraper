// Calls in the modules 
var request = require('request'), 
    cheerio = require('cheerio'),
    knwl = require('knwl.js'),
    knwlInstance = new knwl('english'),
    textFromHTML;

// returns the user input and stores it and logs it to the console
var emailAddress =  process.argv[2];
console.log(emailAddress);


// if the user enters an email address, this turns the email address into a url and logs the url to the console 
if (emailAddress){
    var atDomain = emailAddress.substring(emailAddress.lastIndexOf("@"));

    var domain = atDomain.substring(1);

    var webSite=("https://www.") + domain; 

    console.log(webSite);

    //uses the Request module to download the page,passes the request onto cheerio
    request(webSite, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            console.log(html);
            const $ = cheerio.load(html);

            //turns all of the html into a string 
            textFromHTML = $("*").text();

            //Initiates the knwl plugin and then it's associated default plugins to parse the string 
            knwlInstance.init(textFromHTML);
            phoneNumbers = knwlInstance.get('phones');
            console.log(phoneNumbers);
            emailAddresses = knwlInstance.get('emails');
            console.log(emailAddresses);
            addresses = knwlInstance.get('places');
            console.log(addresses);
        }
    });
} else console.log("please enter an email address");

















