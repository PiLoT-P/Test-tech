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

const str = '123';
const bl = true;

console.log(Number(str));
console.log(Number(bl));
console.log(Number(null));
console.log(Number(undefined));

const arr = [
    {
        add: 'dasd'
    },
    {
        dasd: '1'
    }
]

const obj = {
    dasad: 'dasd'
}

console.log(Array.isArray(arr))
console.log(Array.isArray(obj))
