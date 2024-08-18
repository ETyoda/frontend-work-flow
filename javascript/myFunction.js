// function myfunction(){
//     document.getElementById('txt').innerHTML='THE PARAGERPH IS CHANGED'
// }
// myfunction()
// console.log(document.body) 
// console.log(document.domain)
// console.log(document.url)
// // give the element of the html
// console.log(document.all)

// GETELEMETBYID
// console.log(document.getElementById('txt').innerHTML='Hello world');

//get element by the class

// var items= document.getElementsByClassName('txt-1')
// console.log(items)
// items[0].textContent='what is wrong'
// items[0].style.backgroundColor='red'
// items[0].style.fontWeight='bold'

// QuerySelector

var header =document.querySelector('#txt');
header.style.borderBottom = 'solid 4px #ccc';

// QuerySelectorAll
var titles = document.querySelectorAll('.txt-1')


