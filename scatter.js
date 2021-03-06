var years = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996];
var life = [59.24, 60.89, 62.96, 63.30, 64.52, 65.68, 65.53, 65.39, 67.01, 67.40, 67.69, 68.34, 68.62, 69.70, 70.17, 70.23, 71.03, 71.32, 71.66, 71.89, 72.00, 72.94, 73.54, 73.79, 74.41, 75.08, 75.48, 75.93, 76.09, 76.42, 76.20, 76.54, 77.06, 77.10, 77.51, 77.80, 78.23, 78.65, 78.56, 78.99, 79.00, 79.27, 79.32, 79.46, 79.86, 79.70, 80.38];

var all = [];
for (i = 0; i < 47; i++){
    all.push([years[i], life[i]]);
}

console.log(all)
// adding the plots in
var container = d3.select("svg");
var dots = container.selectAll("circle").data(all).enter();
// dots.append("circle").attr("cx", function(d){return (d[0] - 1950) * 10 + 20;}).attr("cy", function(d){return Math.round((80 - d[1]) * 6 + 20);}).attr("r", 3);
dots.append("circle").attr("cx", function(d){return (d[0] - 1950) * 10 + 50;}).attr("cy", function(d){return Math.round((80 - d[1]) * 6 + 20);}).attr("r", 3);

// axis
var xscale = d3.scaleLinear().domain([1950, 1996]).range([50, 510]);
var yscale = d3.scaleLinear().domain([0, 80]).range([500, 20]);

var x_axis = d3.axisBottom().scale(xscale).tickFormat(d3.format("d")); // to get rid of the comma for the years
var y_axis = d3.axisLeft().scale(yscale);

//Draw axes and move them
container.append("g").attr("transform", "translate(0, 500)").call(x_axis);
container.append("g").attr("transform", "translate(50, 0)").call(y_axis);

container.append("text")
.attr("transform", "rotate(-90)")
.attr("x", -280)
.attr("y", 0)
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Life Expectancy (Years)");

container.append("text")
.attr("x", 300)
.attr("y", 520)
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Year");