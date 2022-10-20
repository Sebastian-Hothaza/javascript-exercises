// We initialize with an empty object of age 0


const findTheOldest = function(arr) { 
    const oldestPerson = arr.reduce((soFar, person) => {
        // A bit morbid, but for living people we assume they die this year
        if (!person.hasOwnProperty('yearOfDeath')){
            person["yearOfDeath"] = 2022;
        }

        let soFarAge = soFar.yearOfDeath - soFar.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;

        if (personAge > soFarAge) soFar = person;
        return soFar;
    },{yearOfBirth:0, yearOfDeath:0});

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
