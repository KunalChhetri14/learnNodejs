// asynchronous
setTimeout(i=> {
    console.log("Print");
},3000)

const name = ["kunal", "Vijay", "Ajay"];

const finalName = name.filter(i => i.length === 5);

console.log(finalName);
