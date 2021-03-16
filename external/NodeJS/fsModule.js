var fs= require('fs')


var readMe= fs.readFileSync("data.txt",'utf-8')
console.log(readMe)