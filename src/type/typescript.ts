// Boolean
let isCool: boolean = true;

// Number
let age: number = 56;

// String
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;
console.log(sizeName);
console.log(sizeName2);

// Any - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let whatever: any = 'Arghhh';
whatever = 5;

// Void => a function that doesnt return
let sing = (): void => {
    console.log('lalala');
}

// Never => a funtion that doenst return + doesnt have any end point
let error = (): never => {
    throw Error('ooops');
    // return 'hello';
}

// Interface => usage for react: good for props
interface CharacterArmy {
    count: number,
    type: string,
    magic: string
}

let fightCharacterArmy = (characters: CharacterArmy) => {
    console.log('FIGHT!');
}

let fightCharacterArmy2 = (characters: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!');
}


// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic?: string // "?" makes the property option, it may or may not be part of the object
}

let dog = {} as CatArmy;
dog.count;

// Function

let fightCharacterArmy3 = (characters: CharacterArmy): void => {
    console.log('FIGHT!');
}

let fightCharacterArmy4 = (characters: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!');
    return 5;
}

// Class
class Animal {
    public sing: string = 'lalalala'; // by default is set to public, but it can be private
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('Raaawwwrr');
lion.greet();

console.log(lion.greet());

// Union => it can be a string or a number; | => or
let confused: string | number | boolean = true;




// ----------------------------------------------------------

let x = 4;
// x = 'Hello'; -> returns an error because it automatically expects a number, without explicitly defining it.