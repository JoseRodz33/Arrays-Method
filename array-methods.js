// ? Array Methods

/* 
    * Methods are function that live inside of an object prototype
    * Denoted bu the . at the end of an object we're working on 
    * ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul", "Rob", "Eric"],
    ["Ben", "Dave", "Beny"],
    ["Lulu", "Julie"]
]

console.log(educationTeam)
educationTeam.push(["Benny Boas", "Kate Sweeney"])
console.log(educationTeam)
let pushReturn = educationTeam.push(["Benny", "Kate"])
console.log("Value", educationTeam, "Return of .push", pushReturn)


/* 
    .pop()

    * removes last array element & returns it
*/

let lastElement = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", lastElement)

let names = ["Paul", "Jose", "Ian"]





/* 
    .unshift()

    * adds an element to the beginning of an array
    * returns the length of the new array
*/

let unshiftReturn = educationTeam.unshift("Michael")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)




/* 
    .shift()

    * removes the first element from an array
    * returns the length of the new array
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

// ? Advanced Array Methods

// Arrays are iterable

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

console.log(states)

for (state of states ) {
    console.log(state)
}

/* 
    .forEach()

    * fires a callback fx on each element of your erray
    * callback has three parameters
        * value - the iterable
        * index - of the iterable
        * array - the entire array .forEach was called upon
*/

// states.forEach((state, index, array) => {
//     console.log(`${state} ${index}`)
// })

let newArr = []
states.forEach(state => {
    states[0] == "A" ? newArr.push(state) : null
})

console.log(newArr)

/* 
    .map()

    * creeates an array with elements resulting from the callback fx
*/

let statesLowerCase = states.map(state => state.toLowerCase())
console.log(statesLowerCase)

/* 
    .filter()

    * Creates a new array based on a filter function
    * Only the filtered items can be added to an array
    * cannot
*/

let statesC = states.filter(state => state.startsWith("C"))
console.log(statesC)



let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]

/* 
    ? Challenge

    * Utilize array methods to raise the grade by 15 points for everyone
    * Those above 90 should not get any points

*/
// Uses new array for new grades
let updatedGrades = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(updatedGrades)

// Rewrites the values of original array to new grades
grades.forEach((_, index, originalArr) => {
    //          _ - placeholder if we don't use the param
    // originalArr[index] == grade
    //             grade  == iterator representation of grade
    //             think of counting on your fingers ^^^
    console.log("This is the", originalArr[index])
    if (originalArr[index] > 90) {
        null
    } else {
        originalArr[index] = originalArr[index] + 15
    }
})
console.log(grades)