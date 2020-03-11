                                        // Creating Charts with Plotly//

// Code for Bar Chart

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Beverages & Percent Orders",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent"}
};

Plotly.newPlot("plotArea", data, layout);


// Code for Pie Chart

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot("pieChartArea", data, layout);


//Skill Drill -- Code for Scatter Plot

  var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'lines+markers',
    type: "scatter"
};
var data = [trace];
var layout = {
    title: "Beverages & Percent Orders",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent"}
};

Plotly.newPlot("scatterArea", data, layout);


                                    // Manipulating Data with javascript //

                                                // Map Function //
// Functional JS - Using the map() function in lieu of a "for loop"
// The map() method must take in a function as its parameter. The parameter name is arbitrary inside the anonymous function.
// The map() method calls the anonymous function on each element in the array.

var numbers = [0,2,4,6,8,];
var doubled = numbers.map(function(num){
    return num + 5;
});
console.log(doubled);


                                            // Filter Function //
//Filter() function
// Generic . Define your own filter function

function filter(names, index, letter) {
    var filteredNames = names.filter(function(word) {
       return word.charAt(index) === letter;
    });
    return filteredNames;
}

//Example 1 using filter() function
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//Example 2 using filter() function
//Filter the array, the results to include only animals whose species name starts with the letter “s
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var animalSpecies = words.filter(function(words){
    return words.charAt(0)  === 's';
});
console.log(animalSpecies);


                                            // Arrow Function //
// The anonymous function inside map() and filter() can be simplified as an arrow function. Here’s an example:
//Eg 1. Modify the code above to use an arrow function inside
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var animalSpecies = words.filter(words => words.charAt(0) === 's');
console.log(animalSpecies);


//Eg 2
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);


                                    // The sort() and reverse() Methods //
// Sort in ascending order - using the arrow function()
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Sort in descending order(i.e reverse() method) - using the arrow function()
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

                                        // Slice() Method //
// Use slice() to select the first three elements of the words array below:
// Test in console of browser
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
slice = words.slice(0, 2);

// Eg 2
var integers = [0,1,2,3,4,5];
slice1 = integers.slice(0,2);

// Eg 3 To slice to the end of an array, you can omit the second argument:
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );