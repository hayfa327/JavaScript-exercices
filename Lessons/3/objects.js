const isRed = false;

const person = {
    name: 'John',
    age: 22,
    address: {
        street: 'streetName 2',
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

person.greet();
