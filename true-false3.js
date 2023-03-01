const x = false;
if(x){
    console.log('true');//true
}
else{
    console.log('false')
}

/* 
truthy
1.true
2.number - or + 
3.any string other than empty string
4.'0','false' as a string
5.empty object and empty array{},[]
6.()
7.' '
8. 1

falsy
1.false
2.0
3. empty string ''
4.undefined
5.null
6.nan
7. 

*/

//option 
//check falsy
const y = ' ';
if(!y){
    console.log('falsy')
}
//check truthy
const z = ' ';
if(!!z){
    console.log('truthy')
}
