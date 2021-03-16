var fs=require('fs')

fs.mkdirSync('newdir', (err)=>
{
    if(err)
    console.log(err.mesage)
})