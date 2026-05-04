function convertToGrams(kg) {
    return kg * 1000;
}
convertToGrams(2);

const convertToGramsExpression = function(kg) {
    return kg * 1000;
};
convertToGramsExpression(2);

// Function declarations are hoisted (can be called before they are defined), while function expressions are not.

const convertToGramsArrow = (kg) => kg * 1000;
convertToGramsArrow(2);