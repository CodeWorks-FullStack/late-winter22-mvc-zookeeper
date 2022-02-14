

export class Animal{
  constructor(name, type, age, carnivore, flight){
    console.log('creating an animal');
    this.name = name
    this.type = type
    this.age = age
    this.eatsMeat = carnivore
    this.canFly = flight
  }

  hello(){
    console.log(`${this.name} the ${this.canFly ? 'flying' : ''}${this.type}, says hello.`)
  }

  get animalTemplate(){
   return `<p>${this.name} the ${this.canFly ? 'flying' : ''}${this.type}, says hello.</p>`
  }
}