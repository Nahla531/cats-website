/*

Syntax:
how to write Js or what are the rules

Data types :

number => 1 2 3 4 3.5 -4 

Boolean => true or false 

string => letters char  '' or ""
 
 "ahmad 1"


variabls => is where we store the values od the data that we want 

var name = "ahmad"

operatorts

arthmatic operators:

+ - / *

1+1
2-3

assigment op =>   = where i can assgin variabels to thier valus

coparison 

== or ===


is 1 equal to 1 

1 == 1 -> only compare the value
1 == '1' instead => 1 === '1'-> false since it comapre the value and the data type 
-----------------

pop up boxes

- alert box show stuff to the user

- prompt

conditional statment
if statment

if (condition)=>if(userchose === "coffe")
{
  do smth
}
else {
  do somthing else
}

*/
var name = "ahmad"
var bollean = true
var x = "this is a stat #"

var y = x + '  another string from here' //concatation

var firstName = "Batool "
var lastName = '   Basam'

var finalName = firstName + lastName
console.log(finalName)
console.log(y)

alert('welcome to my cats world')
var catAnswer = prompt("which type of cat do you like?")
alert('you like ' + catAnswer)

var x = 1, y = 2, z = 3;

console.log(x, y, z)


document.write('<div>' + 'hello' + "</div>")

// console.log(1 =="1")

if (catAnswer == 'hamlaya') {
  document.write('<h3>' + catAnswer + '</h3>')

}
else if (catAnswer == 'whatever') {
  document.write('<h3>' + catAnswer + '</h3>')

}

else {
  alert('please type the correct type of cats')
}



