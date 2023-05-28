"use strict";

const array = ['dasd', '2', 'dasd3', 'ky'];

const newSet = new Set(array);

console.log(newSet);

const btnPlus = document.querySelector('#one-plus');
const parent = document.querySelector('.block')

function plusOne(event) {
    console.log('1',event.target);
    console.log('2', event.currentTarget);
}

parent.addEventListener("click", plusOne);