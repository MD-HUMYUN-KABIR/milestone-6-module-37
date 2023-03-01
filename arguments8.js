//array like object e for of dewa jabe but push,pop,map,filte dewa jabe na

function sum(a,b,c){
    console.log(arguments);//[Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }
    console.log(arguments[4]);//98
    console.log(typeof arguments)// object
    const args = [...arguments];
    console.log(args);//[ 45, 89, 12, 45, 98, 56 ]
}

const total = sum(45,89,12,45,98,56)
console.log(sum.length);//koyta parameter ache seta dekhabe   3