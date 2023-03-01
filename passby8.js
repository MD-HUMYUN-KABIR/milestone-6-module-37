// primitive pass by value
let num1 =5;
let num2 = 7;
function multiply(a,b){
    a = 7;
    const result = a*b;
    return result;
}
console.log(num1);//5
const output = multiply(num1, num2);
console.log(output);//49

//////////////////non primitive object and array pass by reference  and value
let student1 = {name:'jalil',partner:'borsha'};
let student2 = {name: 'raj', partner:'anika'};

function makMovie(couple1,couple2){
    couple1.name = 'ononto';
    couple2.partner = 'mim';
}
console.log(student1, student2);//{ name: 'jalil', partner: 'borsha' } { name: 'raj', partner: 'anika' }
makMovie(student1, student2);
console.log(student1,student2);//{ name: 'ononto', partner: 'borsha' } { name: 'raj', partner: 'mim' } 
//kuno function e object and aray k pathie segula k modify korle main object and array o modify hoye jabe