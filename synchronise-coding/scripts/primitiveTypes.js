// Primitive types cannot be immutable (changed) as this string shows
var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
console.log(text); // "YOU SHOULD NEVER SHOUT WHEN TYPING"
text.toLowerCase();
console.log(text); // "YOU SHOULD NEVER SHOUT WHEN TYPING"

// Primitive types can only be mutable if assigned to a variable as this string shows
var textSmall = text.toLowerCase();
console.log(textSmall); // "you should never shout when typing"