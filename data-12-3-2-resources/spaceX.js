// 12.3.1: Inspect an API call with D3.json()

//Define the URL to the SpaceX
const url = "https://api.spacexdata.com/v2/launchpads";

// Use the d3.json() method to place a call to SpaceX’s API, retrieve the data, and print it to the browser console.
d3.json(url).then(receivedData => console.log(receivedData));

d3.json("samples.json").then(function(data){
    console.log(data);
});

//  Extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array.
// The map() method is used to extract the wfreq property from each “person” in the data.metadata array.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Delete null values from the sorted wfreq array, using the filter() method
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

//You are given the following object. Use Object.entries() to print each key-value pair inside an array.
// The Object.entries() method returns key-value pairs of an object as arrays.
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));


// The forEach() method allows access to each element of an array.
// Use the forEach() method to print to the console each trait and corresponding property
researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

//Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).
// In this case, we are extracting the metadata of the first person in the dataset, as indicated by the zero index position in metadata[0].
// We then use the Object.entries() method to return each key-value pair in an array, and the forEach() method to access each element of these pairs.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});