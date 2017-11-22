// Calls in the modules 
var request = require('request'), 
    cheerio = require('cheerio'),
    knwl = require('knwl.js'),
    knwlInstance = new knwl('english'),
    textFromHTML;

// returns the user input and stores it
var emailAddress =  process.argv[2];

console.log(emailAddress);


// if the user enters an email address, this turns the email address into a url and logs the url to the console 
if (emailAddress){
var atDomain = emailAddress.substring(emailAddress.lastIndexOf("@"));

var domain = atDomain.substring(1);

var webSite=("https://www.") + domain; 

console.log(webSite);

//uses the Request module to download the page or asks user to enter email address if not done so, passes the request onto cheerio

request(webSite, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
      const $ = cheerio.load(html);
      textFromHTML = $("*").text();
      knwlInstance.init(textFromHTML);
      phoneNumbers = knwlInstance.get('phones');
      console.log(phoneNumbers);}
});
} else console.log("please enter an email address");

// defines a new knwl variable, gets all of the text from the downloaded html and saves to allText














