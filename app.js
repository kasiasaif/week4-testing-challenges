const add = (num1,num2) => {
    return num1 + num2;
};

let array=[
    "Mex",
    "Rex",
    "Tex"
];

const fun1 = (name)=>{
    return console.log(`Hello ${name}`)
}
function Car(model, year) {
    this.model = model;
    this.year = year;
}
let myCar = new Car("Mercedes",2021)
console.log(myCar)


function convert(num){
    return num.toString()
}


let planet=[
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
]
function solarSystem(index){
return planet[index-1] ;
} 
console.log(solarSystem(3))

let more = [
    'short',
    'short',
    'enough long',
    'also long',
    'me too long',
]
function sixOrMore(){
    let count = 0;
    more.forEach(element => {
        if(element.length >= 6){
            count ++;
    }
    }) 
    return count;   
}
const classa =[
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,

]

function student(){
    let count = 0;
    classa.forEach(element => {
        if(element ==true){
            count ++;
        }
    });
    return count;
}
function square(dig){
    return (dig*dig);

}

function century(year){
    const str_year = year.toString();
    const result = Number(str_year.slice(0, 2));
    return result;
}
const arr = [0, 0, 0, 1];
const convert2 = (arr) => {
    const binaryStr = arr.join("");
    return parseInt(binaryStr, 2);
};
console.log(convert2(arr));
console.log(student())
console.log(sixOrMore())
console.log(century(1789))


module.exports = {
    add,
    array,
    fun1,
    Car,
    myCar,
    convert,
    planet,
    solarSystem,
    sixOrMore,
    more,
    student,
    square,
    century,
    convert2,
    arr,

}

