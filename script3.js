init()

function init(){
var arrScores = JSON.parse(localStorage.getItem("arrScores")) || [];
var arrScores2 = JSON.parse(localStorage.getItem("arrScores2")) || [];
var sess = localStorage.getItem("sess");
var sess2 = localStorage.getItem("sess2");
var obj = JSON.parse(localStorage.getItem("obj")) || {};
var obj2 = JSON.parse(localStorage.getItem("obj2")) || {};
var table = document.querySelector("table");
var table2 = document.querySelector("#table2");
if (arrScores.length !== 0){
createTable();

function createTable(){
    var trs = `
<tr id="first">
        <td><b>Miejsce</b></td>
        <td class="user"><b>Użytkownik</b></td>
        <td><b>Wynik</b></td>
        <td><b>Czas</b></td>
    </tr>
`
table.innerHTML +=trs
for (var x=0; x<arrScores.length; x++)
{
    createScores(x);
}
}

function createScores(nn){

if (obj.id === arrScores[nn].id && sess !== null){
    var trs = `
<tr>
        <td><b>${nn+1}</b></td>
        <td class="user"><b>${arrScores[nn].uzytkownik}</b></td>
        <td><b>${arrScores[nn].wynik}</b></td>
        <td><b>${arrScores[nn].czas}</b></td>
    </tr>
`

}
else {
var trs = `
<tr>
        <td>${nn+1}</td>
        <td class="user">${arrScores[nn].uzytkownik}</td>
        <td>${arrScores[nn].wynik}</td>
        <td>${arrScores[nn].czas}</td>
    </tr>
`
}
table.innerHTML +=trs
}
}


if (arrScores2.length !== 0){
createTable2();

function createTable2(){
    var trs = `
<tr id="first">
        <td><b>Miejsce</b></td>
        <td class="user"><b>Użytkownik</b></td>
        <td><b>Wynik</b></td>
        <td><b>Czas</b></td>
    </tr>
`
table2.innerHTML +=trs
for (var y=0; y<arrScores2.length; y++)
{
    createScores2(y);
}
}

function createScores2(mm){

if (obj2.id === arrScores2[mm].id && sess2 !== null){
    var trs = `
<tr>
        <td><b>${mm+1}</b></td>
        <td class="user"><b>${arrScores2[mm].uzytkownik}</b></td>
        <td><b>${arrScores2[mm].wynik}</b></td>
        <td><b>${arrScores2[mm].czas}</b></td>
    </tr>
`

}
else {
var trs = `
<tr>
        <td>${mm+1}</td>
        <td class="user">${arrScores2[mm].uzytkownik}</td>
        <td>${arrScores2[mm].wynik}</td>
        <td>${arrScores2[mm].czas}</td>
    </tr>
`
}
table2.innerHTML +=trs
}
}

localStorage.removeItem("sess");
localStorage.removeItem("sess2");
}