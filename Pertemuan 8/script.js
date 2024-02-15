console.log("Tipe Data")

var integer = 10
console.log(integer)

var string ="haha"
console.log(string)

var boolean = false
console.log(boolean)

var date = new Date();
console.log(date)

var array = ["1", "2", 3, 4, 5]
console.log(array)

var object = {
    name: "john",
    age: 30,
    city: "Jakarta"   
}
console.log(object)

console.log("Tipe variable")

console.log("var, let, const")

console.log("arithmetic operators")
// + - / *
console.log(5*9)

console.log("comparison and logical operators")

// == (is equal)
let a = (5==6)

// strict equal
let aa = (5==="5")

// not equal
let b = (2!="2")

// strict not equal
let bb = (2!=="2")

console.log(b)

// less than

let c = (20 < 10)
console.log(c)

// logical and

let d = (true&&true)
console.log(d)

// logical or

let e = (true||true)
console.log(e)

console.log("selection")

const age = 21

// if else
if(age==20){
console.log("Umur anda 20")
}else{
    console.log("Umur anda bukan 20")
}

// nested if
const score = 95
var grade = ""

if(score>90){
    grade = "A"
    }else{
        if(score > 80){
            grade = "B"
        }else{
            grade = "C"
        }
    }

console.log(grade)

// ternary operator
let kendaraan = "mobil"
let jmlhBan = (kendaraan=="mobil") ? 4 : 2
console.log(jmlhBan) 

// switch case
let day = 2
let dayName = ""

switch(day){
    case 1:
        dayName = "Minggu"
        break;
    case 2:
        dayName = "Senin"
        break; 
}

console.log(dayName)

console.log("Looping")

// while
let count = 0;
while(count <=5){
    console.log("count ke-" +count)
    count++
}

// do while
let countt = 0;
do{
    console.log("count ke-" +countt)
    countt++
}while(countt<=5)

// for

for(let i=0;i<5;i++){
    console.log("a")
}

console.log("Function")

// parameter -> adalah nilai yang diterima oleh sebuah fungsi. Fungsi bisa memiliki satu atau lebih parameter

// function
function greet(){
    console.log("Hello Alfredo")
}

greet()

// function with parameter
function nyapa(nama){
    console.log("Hello "+nama)
}

nyapa("Javier")

// arrow function -> supaya code nya ringkas

// function reguler
function add(a,b){
    console.log(a+b)
}

add(2,3)

// arrow function
const addd = (a,b) => console.log(a+b)

addd(5,5)


// EVENT

let tombol = document.getElementById('button')

tombol.addEventListener('click', function(){
    alert("Button clicked")
})