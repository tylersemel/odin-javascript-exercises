const findTheOldest = function(people) {
    //sort people by age
    //retrieve oldest person at the back of the array

    return people.sort((a, b) => {
        let ageA = 0;
        let ageB = 0;
        if (!a.hasOwnProperty("yearOfDeath")) {
            ageA = new Date().getFullYear() - a.yearOfBirth
        }
        else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        console.log(b.hasOwnProperty("yearOfDeath"));
        if (!b.hasOwnProperty("yearOfDeath")) {
            ageB = new Date().getFullYear() - b.yearOfBirth
        }
        else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }

        return ageA > ageB ? 1 : -1;
    })[people.length - 1];
    

};

// Do not edit below this line
module.exports = findTheOldest;
