import shape = require("./IShape")

class Triangle implements shape.IShape
{
    public draw()
    {
        console.log("Triagle is drawn (external module)")
    }
}