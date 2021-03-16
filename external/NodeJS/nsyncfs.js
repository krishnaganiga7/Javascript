var fs= require('fs')


// var readMe= fs.readFileSync("data.txt",'utf-8')
// console.log(readMe)

fs.readFile('data.txt','utf-8',function(err,data)
{
    if(err)
    {
        console.log(err.message)

    }
    else if(data)
    {
        console.log(data)
        fs.writeFile('created.txt',data, function(err)
        {
            if(err) {
                console.log(err.message)
            }
           
        })
    }
})

console.log('after the read fn')