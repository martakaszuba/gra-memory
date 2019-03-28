init()
function init(){
var match = document.querySelector("#match");
var time = document.querySelector("#time");
var button = document.querySelector(".btn");
var arr = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var firstcard = null;
var secondcard = null;
var countMoves = 0;
var countRemove = 8;
var sess = 0;
var scores = 3000;
var str;
var t;
var arrScores = JSON.parse(localStorage.getItem("arrScores")) || [];

function randomArr(arr){
var newArr = [];
while(arr.length>0)
{
var rand = Math.floor(Math.random()* arr.length);
newArr.push(arr[rand]);
arr.splice(rand,1)
}
return newArr;
}
arr = randomArr(arr);

var c = 0;
for (var i=0; i<4; i++){
    for (var j=0; j<4; j++){
        Create(arr[c], i, j);
        c++;
    }
}

function Create(num, i, j){
var img = document.createElement("img");
img.num = num;
img.src = "images/cardback.jpg";
img.style.position = "absolute";
img.style.top = (i * 100)+"px";
img.style.left = (j * 100)+"px";
img.addEventListener("click", Sprawdzam);
match.appendChild(img);
}

function Sprawdzam(e){
var card = e.target;
if (countMoves === 0){
    setTime();
}
countMoves++;
scores = scores - 30;

if (firstcard === null)
{
    firstcard = card; 
    firstcard.src = "images/card"+card.num+".jpg";
}

else if (firstcard === card){

}

else if (secondcard == null){
    secondcard = card;
    secondcard.src = "images/card"+card.num+".jpg";
    setTimeout(checkCard, 600);
}

function checkCard(){
    if (firstcard.num === secondcard.num)
    {
    $(firstcard).fadeOut(300,function(){
        $(this).remove();
    });
    $(secondcard).fadeOut(300, function(){
        $(this).remove();
    });
    countRemove--;
    if (countRemove === 0){
    clearInterval(t);
    setTimeout(function(){
    var nick = prompt("Wpisz nazwę użytkownika");
    var obj = {
        uzytkownik:nick,
        czas:str,
        wynik:scores,
        id:getId()
    }
    localStorage.setItem("obj",JSON.stringify(obj))
    localStorage.setItem("sess",sess);
    arrScores.push(obj);
    arrScores.sort(function(a,b){
   return b.wynik - a.wynik
})
    localStorage.setItem("arrScores",JSON.stringify(arrScores));
    window.open("scores.html", "_self");
    },500);
}
    }

    else {
    firstcard.src = "images/cardback.jpg";
    secondcard.src = "images/cardback.jpg";
    }

    firstcard = null;
    secondcard = null;
}
}
var count = 0;
function setTime(){
t = setInterval(function(){
if (count <=9){
  str ="0:0"+count;
}

else if(count <=59){
  str ="0:"+count;
}

else {
  var minutes = Math.floor(count/60);
  var seconds = count%60;
  if (seconds <=9){
    str = minutes+":0"+seconds;
}
else {
  str = minutes+":"+seconds;
}
}
time.innerHTML = str;
count++;
}, 1000);
}

function getId(){
var alpha ="abcdefghijklmnopqrstuvwxyz";
var str = "";
while (str.length<4){
    var rand = Math.floor(Math.random()*alpha.length);
    str +=alpha[rand];
}
return str;
}

button.addEventListener("click", function(){
    location.reload(); 
})
}