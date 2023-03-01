/* 
1.tell the deference between primitive and non-primitive data types in js
2.what are the truthy falsy value,give some example
3.what is the deference between double equal == and triple === equal
4.what is scope in js
5. define blog scop in js
6. define block scop and global scop
7. what is hoisting in js
8. how to use the js callback function
9.explain closer in js
explain pass by value and passed by reference
*/



/* 

*/
let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); 

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}


function sum(p, q) {
 p + q;
}
const result = sum(2, 3);
console.log(result);