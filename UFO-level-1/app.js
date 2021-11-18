// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var form = d3.select("#form")
var button = d3.select("#filter-btn")

button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);

    var filterdata = tableData.filter(x=>x.datetime === inputValue)
    console.log(filterdata)

    tbody.html("")

    filterdata.forEach((weatherReport) => {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    // Set the span tag in the h1 element to the text
    // that was entered in the form
    // d3.select("h1>span").text(inputValue);
  }
  