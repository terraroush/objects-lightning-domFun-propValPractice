console.log("hello")


const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
}


let names = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]




let barb = {
    role: "parent1",
    name: "Barb",
    age: 37
}
let phil = {
    role: "parent2",
    name: "Phil",
    age: 38
}
let maple = {
    role: "child",
    name: "Maple",
    age: 3
}
let sue = {
    role: "grandparent",
    name: "Sue",
    age: 68
}

let familyMembers = [barb, phil, maple, sue]
console.log("family members arr", familyMembers)




const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(
    "DIMENSIONS", 
    "height:", empireStateBuilding.height,
    "squareFt:", empireStateBuilding.squareFeet,
    "EW length:", empireStateBuilding.eastWestLength,
    "NS length:", empireStateBuilding.northSouthLength
    
)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

let stories = "stories"
let add = "address"
let con_date = "constructionDate"
let owner = "owner"
let arch = "architect"

console.log("OTHER PROPS",
    empireStateBuilding[stories],
    empireStateBuilding[add],
    empireStateBuilding[con_date],
    empireStateBuilding[owner],
    empireStateBuilding[arch]
    
)


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
let partTime = nashvilleSoftwareSchool.instructors.partTime
for (let i = 0; i < partTime.length; i++) {
    console.log(partTime[i])
}

let fullTime = nashvilleSoftwareSchool.instructors.fullTime
for (let i = 0; i < fullTime.length; i++) {
    console.log(fullTime[i])
}

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log(nashvilleSoftwareSchool.instructors.fullTime[3])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])


