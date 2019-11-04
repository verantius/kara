// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2019 14:47:11").getTime();
var sir =1;
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//Moja funkcja
var hour2 = new Date().getHours();

if (hour2 >= 6 && hour2 <=9) {
  document.getElementById("full").innerHTML = "Cześć Karolina! Dobrego poranka i smacznej kawy :> ";

  var img = document.createElement("img");
  img.src = "http://giphygifs.s3.amazonaws.com/media/KuFYjNM2gmcdq/giphy.gif";
  var src = document.getElementById("img");
  src.appendChild(img);
  
} else if (hour2 >= 9 && hour2 <=18) {
  document.getElementById("full").innerHTML = "Dobrego dnia! Mocy sukcesów :P";
  
  var img = document.createElement("img");
  img.src = "https://media.giphy.com/media/QF8BVLZX6LCWk/giphy.gif";
  var src = document.getElementById("img");
  src.appendChild(img);

} else if (hour2 >= 18 && hour2 <=23) {
  document.getElementById("full").innerHTML = "Dobry wieczór! ";
  
  var img = document.createElement("img");
  img.src = "https://media.giphy.com/media/fY5RgqVtSD8uuRYuHc/giphy.gif";
  var src = document.getElementById("img");
  src.appendChild(img);
  
} else {
  document.getElementById("full").innerHTML = "Dobrej Nocy! ";
  var img = document.createElement("img");
  img.src = "https://media.giphy.com/media/1zjuVaZtOzaxlEaBBW/giphy.gif";
  var src = document.getElementById("img");
  src.appendChild(img);
}
