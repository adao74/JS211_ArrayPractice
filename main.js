const cars = ["Ford", "BMW", "Nissan", "Mustang"]
console.log(cars.length)

const moreCars = ["Subaru", "Toyota", "Tesla", "Honda"]
const totalCars = cars.concat(moreCars)
console.log(totalCars)

console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))

// convert to a string
const stringOfCars = totalCars.join()
console.log(stringOfCars)

// convert to array (each car is a string)
const carsFromString = stringOfCars.split(",")
console.log(carsFromString)

const carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort() // mutates carsInReverse
console.log(carsInReverse.indexOf('BMW'))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)  // does not mutate pets 
console.log(reptiles)
console.log(pets)

const removedReptiles = pets.splice(4, 2, "hamster") // mutates pets. Removes 2 indices AND adds "hamster" starting at index 4. 
console.log(removedReptiles)
console.log(pets)

const removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push(removedPet) // mutates pets
console.log(pets)

// shift() mutates the array
// When placed as an argument in console.log(), console.log() uses the return value. Return value is the removed/first item. 
console.log(pets.shift())  

pets.unshift('turtle')
console.log(pets)

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (element, index, arr) => {
    element = element + 2
    arr[index] = element // need to reassign, otherwise array (numbers) doesn't change 
}

numbers.forEach(addTwo)

console.log(numbers)