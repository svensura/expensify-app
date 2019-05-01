// ARR DESTRUCTURING

const address = [
    'ul. Krola Boleslawa Chrobrego 2/33',
    '50-254',
    'Wroclaw',
    'Poland'
];

const [street = 'Unknown', , city = 'Unknown', country = 'Unknown'] = address;

console.log(`The current location is: ${street}, ${city}, ${country}.`);

const menu = [
    'Coffee',
    '$3.00',
    '$5.00',
    '$7.00'
];

const [coffee, , mediumCoffeePrice] = menu;

console.log(`A medium ${coffee} is ${mediumCoffeePrice}.`);

// OB DESTRUCTURING

const przem = {
    name: 'Przem',
    age: 30,
    location: {
        place: 'Wroclaw',
        temp: 18
    }
};

const { name = 'Anon', age } = przem;

console.log(`${name} is ${age}.`);

const { place, temp: temperature = 20 } = przem.location;

console.log(`The temperature in ${place} is... ${temperature}!`);

const book = {
    title: 'You Don\'t Know JavaScript',
    author: 'K. Simpson',
    publisher: {
        originalPublisher: 'O\'REILLY',
        polishPublisher: 'Helion'
    }
};

const { originalPublisher: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);