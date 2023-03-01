function greeting(greeting,name){
    greeting(name);// oi function k parameter hisebe akhane ene abar akhan theke e seta k call korechi it is call back function
    greeting('hi');
}

function greetingHandler(name){
    console.log('amm', name)//amm tom
}
function evening(name){
    console.log('evening', name)
}
function night(name){
    console.log('night', name)
}
function morning(name){
    console.log('morning', name)
}
greeting(greetingHandler,'tom');
greeting(evening,'tom');
greeting(night,'tom');
greeting(morning,'tom');

// suppose f2 function k jodi f1 function e parameter hisebe pathanu hoy and f1 er vitor theke abar jodi f2 k call kora hoy take e callback function bole