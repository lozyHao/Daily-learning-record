const fs = require("fs");
const path = require("path");
let pathName1 = path.join(__dirname,"files", "1.txt");
let pathName2 = path.join(__dirname,"files", "2.txt");
let pathName3 = path.join(__dirname,"files", "3.txt");
let pathName4 = path.join(__dirname,"files", "data.txt");

fs.readFile(pathName1,"utf-8",(error1, data1)=>{
    if(error1){
        console.log(error1);
        return
    }
    fs.readFile(pathName2,"utf-8",(error2, data2)=>{
        if(error2){
            console.log(error2);
            return
        }
        fs.readFile(pathName3,"utf-8",(error3, data3)=>{
            if(error3){
                console.log(error3);
                return
            }
            fs.writeFile(pathName4,data1+data2+data3,"utf-8",(error)=>{
                console.log(data1+data2+data3);
            })
        })
    })
});