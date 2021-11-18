const points = [40,20,30,100,300,2,14,31,30,59,395,28,82, 22,49,305,2049,294,394,20,573,39,57,48,99,99,23,394,22,22,100];
document.getElementById('demo').innerHTML = points;

function myFunction1(){
    points.sort ();
    document.getElementById('demo').innerHTML = points;
}
function myFunction2(){
    points.sort(function(a,b){ 
        return a - b ;
    });
    document.getElementById('demo').innerHTML = points ;
}
function myFunction3(){
    points.sort(function(a,b){
        return b - a ;
    });
    document.getElementById('demo').innerHTML = points;
}
function myFunction4(){
    points.sort(function(a, b){
        return 0.5 - Math.random() ;
    });
    document.getElementById('demo').innerHTML = points;
}

// JavaScript Array Iteration 
const numbers = [40,20,30,100,300,2,14,31,30,59,395,28,82, 22,49,305,2049,294,394,20,573,39,57,48,99,99,23,394,22,22,100];

const over40 = numbers.filter(myFunction);

document.getElementById('demo2').innerHTML = over40 ;

function myFunction( value){
    return value < 40 ; 
};

const d = new Date();
document.getElementById('timed').innerHTML = d.toDateString();
