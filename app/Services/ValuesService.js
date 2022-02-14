import { ProxyState } from "../AppState.js";
import { Animal } from "../Models/Animal.js";
import { Value } from "../Models/Value.js";

let animal1 = new Animal('koko','Gorilla', 43, true, false)
let animal2 = new Animal('Tim', 'Turtle', 200, true, true)
let animal3 = new Animal('Sebastian', 'Sloth', 5, false, false)

// NOTE TEMP EXAMPLE THIS WILL MOVE TO THE PROXYSTATE AT A LATER DAT
let allAnimals = [animal1, animal2, animal3]

class ValuesService {
  sayHelloToAnimals() {
    // NOTE DONT DO THIS OTHER THAN TODAY
    let template = ''
    allAnimals.forEach( a => a.hello())
    allAnimals.forEach(a => template += a.animalTemplate)
    console.log(template)
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

