var ctx = document.getElementById("myChart").getContext('2d');

var options = {responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
};

// End Defining data
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
                label: '', // Name the series
                data: [{
                  x: 56.396,
                  y: 39495.62847,
                  r: 32.37291283
                }, {
                  x: 39.359,
                  y: 57572.50275,
                  r: 48.69697385
                }, {
                  x: 67.667,
                  y: 39624.48208,
                  r: 20.82712492
                }, {
                  x: 19.737,
                  y: 40275.27533,
                  r: 14.6318578
                }, {
                  x: 87.762,
                  y: 111891.2518,
                  r: 12.51661885
                }, {
                  x: 62.202,
                  y: 41625.59169,
                  r: 29.91360367
                }, {
                  x: 46.673,
                  y: 24250.97445,
                  r: 20.8275502
                }, {
                  x: 74.529,
                  y: 54249.575,
                  r: 39.54942254
                }, {
                  x: 38.127,
                  y: 34792.61927,
                  r: 29.38140435
                }, {
                  x: 72.219,
                  y: 32288.6988,
                  r: 8.625831316
                }, {
                  x: 43.987,
                  y: 56167.0479,
                  r: 47.52835617
                }, {
                  x: 26.096,
                  y: 41463.12195,
                  r: 72.91631353
                }, {
                  x: 62.589,
                  y: 43640.57609,
                  r: 29.55301918
                }, {
                  x: 95.702,
                  y: 53762.87456,
                  r: 7.357697764
                }, {
                  x: 54.316,
                  y: 41642.11337,
                  r: 54.94391826
                }, {
                  x: 94.564,
                  y: 91207.16696,
                  r: 8.650779607
                }, {
                  x: 49.015,
                  y: 42499.5,
                  r: 53.11196461
                }, {
                  x: 68.056,
                  y: 40869.826,
                  r: 27.937018
                }, {
                  x: 87.102,
                  y: 39097.21961,
                  r: 23.27091171
                }, {
                  x: 61,
                  y: 41249.75,
                  r: 31.60731041

                }], // Specify the data values array
          borderColor: '#2196f3', // Add custom color border
          backgroundColor: '#7C3626', // Add custom color background (Points and Fill)
            }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Baltimore neighborhoods with more tree coverage are not necessarily wealthier or more walkable',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The size of the bubble represents the amount of trees in a neighborhood while the x-axis represents walkability and the y-axis represents median income for each neighborhood. Data from Open Baltimore.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                text: 'percent of households without internet access'
            }
        },
    },
});
