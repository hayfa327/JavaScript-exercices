const person = {
    name: 'John',
    age: 22,
    address: {
        street: 'streetName',
        number: 2,
    },
    isBirthday: false,
    hobbies: ['reading', 'swimming'],
    greet: function () {
        console.log(`Hi ${this.name}`);
    }, // preferably use function keyword
    isRed: function () {
        console.log(`Is this red: ${isRed}`);
    },
    arrow: () => {
        console.log('I cannot use "this."');
    }, // cannot use the keyword this in arrow functions
};

const { name: personName, age } = person; // person.name changing the variable name to personName, destruture multiple variables on the same line

const {
    address: { street },
} = person; // nested destructuring person.address.street

// console.log(street, age, personName)

function checkPersonName({ name = 'Alice' }) {
    console.log(name);
}

function checkPersonNameAlternative(user) {
    // PREFERABLY DONT USE THIS
    console.log(user.address.street.toUpperCase());
}

checkPersonName(person);
checkPersonNameAlternative(person);
