var imie;
imie = "Janusz";
var nazwisko = "Kowal";
//+ oznacza konkatenacja
document.write("Imię: " + imie);
document.write("<br>Nazwisko: " + nazwisko);

var wiek = 15;
if(wiek>=18){
    document.write("<br>Jesteś pełnoletni");
}else if(wiek<15){
    document.write("<br>Jesteś dzieckiem");
}else{
    document.write("<br>Nie jesteś pełnoletni");
}

var x, y;
x = 10;
y = 4;
var suma = x+y;
//window.alert("Suma wynosi " + suma);
//alert("Suma wynosi " + suma);
var roznica = x-y;
var dzielenie = x/y;
var mnozenie = x*y;
var modulo = x%y;

console.log(modulo);
