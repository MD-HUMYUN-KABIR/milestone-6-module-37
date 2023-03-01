function kithen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;
    }
}// vitorer and bahirer 2 ta function e relation toiri kore closer create koreche

const firstServer = kithen();
console.log(firstServer);//[Function (anonymous)]
console.log(firstServer());//1//tara bar bar tader nijosso value store kore tarpor theke e dekhabe
const w1 = kithen();
console.log(w1());//tara bar bar tader nijosso value store kore tarpor theke e dekhabe
const w2 = kithen();
console.log(w2())//tara bar bar tader nijosso value store kore tarpor theke e dekhabe
//
const a = 10;
function f(param1){
    let b = param1;
    return function n(){
        let c = 10;
        let d = a+b+c;//bahir theke value access
        return d;
    }
}
const k = f(20);
console.log(k());