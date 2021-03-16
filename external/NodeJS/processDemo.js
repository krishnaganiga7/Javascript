var events= require('events')
var util = require('util')
var fs= require('fs')


var Person = function(name)
{
    this.name= name
}

//speak

util.inherits(Person, events.EventEmitter);

var john = new Person("john")
var mary = new Person("mary")
var jim = new Person("jim")

var people= [john,mary,jim]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+'said:'+msg)
    })
})

john.emit('speak','are you okay?')

mary.emit('speak','are you talking to me?')