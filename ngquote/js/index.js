/*$(document).ready(function()  {   
$("#newQuote").on("click", function(){

  
});

   $.getJSON("/json/cats.json", function(json)

    json    $(".quote").html("Here is the message");
= json.filter(function(val) {
  return (val.id == Math.floor(Math.random()* (10 - 1 + 1)) + 1);
});
 */


               /*$(document).ready(function() {

    $("#newQuote").on("click", function() {

          $(".quote").html(     getJSON
 );

                
        $.getJSON = json.filter(function(val) {
  return (val.id ==Math.floor(Math.random()*  10 - 1 + 1));
});
 });
                 
                  $(getJSON).html(html);


               });
      
        
*/ 




 





var quotes = ["Moral indignation is jealousy with a halo.- H. G. Wells" ,
              "Glory is fleeting, but obscurity is forever.- Napoleon Bonaparte ",
 "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.- Bertrand Russell",
 "Victory goes to the player who makes the next-to-last mistake. - Chessmaster Savielly Grigorievitch Tartakower (1887-1956)",
"Don't be so humble - you are not that great.- Golda Meir ",  
              
"Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",

"Strive not to be a success, but rather to be of value. –Albert Einstein",

"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost",

"I attribute my success to this: I never gave or took any excuse. –Florence Nightingale",

"You miss 100% of the shots you don’t take. –Wayne Gretzky",

"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan",

"The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",

"Every strike brings me closer to the next home run. –Babe Ruth"
];




function getQuote() { 
    var theQuote= Math.floor(Math.random() * quotes.length);
}

  
$(document).ready(function() {
  var baseUrl = "https://twitter.com/intent/tweet?text="
  $('#newQuote').click(function() {
    var currentQuote = quotes[getQuote()];
    $('#quote').text(currentQuote);
    $("#tweetQuote").attr("href", baseUrl + currentQuote);
  });            
});


var app=angular.module("myApp",[]);
app.controller("mainCtrl",function($scope){
               
  $scope.quote="";
  $scope.getQuote=function(){
    var index=Math.floor(Math.random() * quotes.length);
    $scope.quote=quotes[index];
    
  };
  
               })



var test="hello";