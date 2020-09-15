var rand1=Math.floor(Math.random()*6)+1;

 var dice1image_source="images/"+"dice"+rand1+".png";


document.querySelector(".dice1").setAttribute("src",dice1image_source);

var rand2=Math.floor(Math.random()*6)+1;

var dice2image_source="images/"+"dice"+rand2+".png";

document.querySelector(".dice2").setAttribute("src",dice2image_source);

if(rand1 > rand2)
{
 document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(rand2 > rand1)
{
document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(rand2 === rand1){
document.querySelector("h1").innerHTML="Draw!";
}
