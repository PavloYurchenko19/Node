const fs = require('fs');
const path = require('path')


const onlineUser = [{ name: "Andrii", age: 22, city: "Lviv"},{ name: "Pavlo", age: 19, city: "Lviv"},{ name: "Roma", age: 27, city: "Rava"}]
const inPersonUser = [{ name: "Harry", age: 29, city: "London"},{ name: "Rik", age: 11, city: "Sumy"},{ name: "Vasya", age: 55, city: "Rivne"}]

// fs.mkdir(path.join('main','online','inPerson'), {recursive:true},(err)=>{
//     if (err){
//         console.log(err);
//         throw err
//     }
// })

//  onlineUser.map(user => {
//     fs.appendFile(path.join('main','online','online.txt'),`\nNAME:${user.name} \nAge:${user.age}\nCity:${user.city}` ,(err)=>{
//         if (err){
//             console.log(err);
//             throw err
//         }
//     })
// } );
//
// inPersonUser.map(user => {
//     fs.appendFile(path.join('main','online','inPerson','inPerson.txt'),`\nNAME:${user.name} \nAge:${user.age}\nCity:${user.city}` ,(err)=>{
//         if (err){
//             console.log(err);
//             throw err
//         }
//     })
// } );
//
//

function replace() {
    fs.readFile(path.join('main','online','inPerson','inPerson.txt'),(err,data)=>{
        if (err){
            console.log(err);
            throw err
        }
        fs.appendFile(path.join('main','online','online.txt'), `${data.toString()}`,{flag:"w"} , (err =>{
            if (err){
                console.log(err);
                throw err
            }
        }) )
    })
    fs.readFile(path.join('main','online','online.txt'),(err,data)=>{
        if (err){
            console.log(err);
            throw err
        }
        fs.appendFile(path.join('main','online','inPerson','inPerson.txt'), `${data.toString()}` ,{flag:"w"}, (err =>{
            if (err){
                console.log(err);
                throw err
            }
        }) )
    })
}



replace()

