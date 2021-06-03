var randomNumber1=Math.floor(Math.random()*6 )+ 1;       //1-6
var randomNumber2=Math.floor(Math.random()*6 )+ 1;

var randomImage = "dice" + randomNumber1 + ".png";       //   if randomNumber1===1, then randomImage=dice1.png
var randomImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/"+ randomImage;
var randomImageSource1 = "images/"+ randomImage1;

var image1 =  document.querySelectorAll("img")[0];
var image2 =  document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);
image2.setAttribute("src",randomImageSource1);




if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win! ";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" Player 2 Win!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}