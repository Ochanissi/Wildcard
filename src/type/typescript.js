// Boolean
var isCool = true;
// Number
var age = 56;
// String
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var sizeName2 = Size.Small;
console.log(sizeName);
console.log(sizeName2);
// Any - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var whatever = 'Arghhh';
whatever = 5;
// Void => a function that doesnt return
var sing = function () {
    console.log('lalala');
};
// Never => a funtion that doenst return + doesnt have any end point
var error = function () {
    throw Error('ooops');
    // return 'hello';
};
var fightCharacterArmy = function (characters) {
    console.log('FIGHT!');
};
var fightCharacterArmy2 = function (characters) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
