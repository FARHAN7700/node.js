const { error } = require("console")
const fs =require("fs")
console.log("starting")

// console.log(fs)
// fs.writeFileSync("farhan.txt","farhan is a good boy")
fs.writeFile("farhan.txt","farhan is a good boy",()=>{
    console.log("done")
    fs.readFile("farhan.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("farhan.txt","and also fine boy",(error,data)=>{
    console.log(data)
})
console.log("done done")