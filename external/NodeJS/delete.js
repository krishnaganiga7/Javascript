var fs=require('fs')

fs.unlink('created.txt',function(err)
{
    if(err)
        console.log(err.message)
    else
        console.log("File deleted")

})