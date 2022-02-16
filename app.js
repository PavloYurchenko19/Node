const fs = require('fs')
const path = require("path");

// fs.mkdir(path.join(__dirname,'Main','Class_work','exercise_1'),{recursive:true},(err)=>{
//     if (err){
//         console.log(err);
//         throw err
//     }
// })
// fs.rmdir(path.join(__dirname,'Main','Class_work','exercise_1.txt'),(err)=>{
//     if (err){
//         console.log(err);
//         throw err
//     }
// })

// fs.appendFile(path.join(__dirname,'Main','Class_work','exercise_1','class work.txt'),"1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу\n" +
//     "як можна це обійти, але поки зробіть так",(err)=>{
//     if (err){
//         console.log(err);
//         throw err
//     }
//     fs.readFile(path.join(__dirname,'Main','Class_work','exercise_1','class work.txt'),(err,data)=>{
//         if (err){
//             console.log(err);
//             throw err
//         }
//         fs.writeFile(path.join(__dirname,'Main','Class_work','exercise_1','reride.txt'),`${data.toString()}`,(err)=>{
//             if (err){
//                 console.log(err);
//                 throw err
//             }
//         })
//     })
//
// })

function rerideAndDelete() {

    fs.readFile(path.join(__dirname, 'Main', 'Class_work', 'exercise_2', 'exercise2.txt'), (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.writeFile(path.join(__dirname, 'Main', 'Class_work', 'exercise_2', 'override_2', 'override_2.txt'), (`${data.toString()}`),{flag:'w'}, (err) => {
            if (err) {
                console.log(err);
                throw err
            }
            fs.unlink(path.join(__dirname, 'Main', 'Class_work', 'exercise_2', 'exercise2.txt'), err => {
                if (err) {
                    console.log(err);
                    throw err
                }
                console.log('removed');
            })

        })
    })
}


function exercise3() {
    for (let i = 0; i < 5 ; i++) {

        fs.mkdir(path.join(__dirname,'exe3',`makeNewFolder${i}`),err=>{
            if(err){
                console.log(err);
                throw err
            }
        })
        fs.appendFile(path.join(__dirname,`exe3`,`${i}file.txt`),'some text',(err)=>{
            if (err){
                console.log(err);
                throw err
            }
        })
    }


}
exercise3()
function changeData() {
    fs.readdir(path.join(__dirname,'exe3'),(err,data) => {
        if (err){
            console.log(err);
            throw err
        }
        data.forEach(file=>{
            if (file.includes('.txt')){
                fs.writeFile(path.join(__dirname,'exe3',`${file}`),'',{flag:'w'},err=>{
                    if (err){
                        console.log(err);
                        throw err
                    }
                })
            }else{
                fs.rename(path.join(__dirname,'exe3',`${file}`),path.join(__dirname,'exe3',`_new${file}`),err =>{
                    if (err){
                        console.log(err);
                        throw err
                    }
                })
            }
        })

        // console.log(data);

        // fs.readFile(path.join(__dirname,'exe3','.txt'),(err,data)=>{
        //     if (err){
        //         console.log(err);
        //         throw err
        //     }
        //     console.log(data);
        // })
    })
}
changeData()