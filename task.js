//global scope
var a = 100
function a1(){
    let b= 20
    c = a+b
    console.log(c)
}
console.log(a)
a1()
//block scope
var a1=12
{
    let c1=34
    const b1=25
    console.log(c1+b1)
}
//console.log(a1+c1)//reference error as block scope variables are not accessed outside the block
//function scope
let a2 =10
const b2=45
function a4(){
    var c2=8
    console.log(a2+b2+c2)
}
a4()