class Rectangle{
    constructor(width,height,color){
        this.width =width ,
        this.height = height ,
        this.color = color
    }

    area(){
        const area =  this.height * this.width
        return area
    }

    paint(){
        console.log(`The color of the rectangle is ${this.color}`)
    }
    print(){
        console.log("Here is this",this)
    }
}

const rect = new Rectangle(10 ,20, color = "RED")
const area_2 = rect.area()

rect.print()

console.log("The area of the reactangle is :", area_2)
rect.paint()
rect.print();

class Pokemon{
    constructor(type , name , level){
        this.type = type ,
        this.name = name ,
        this.level = level 
    }

    voice(){
        if (this.name.toString().toLowerCase() == "pikachu") {
          console.log("Pika - pi");
        } else {
          console.log("balbasaur");
        }
    }

}

const pikachu = new Pokemon("Electric", "Pikachu" , 13)

 pikachu.voice()

console.log(v)


const now = new Date()
console.log(now.getDate())
console.log(now.getFullYear())
console.log(now.getDay())
console.log(now.getSeconds())


const map  =  new Map()
map.set('name','Kirat')
console.log(map.get('name'))