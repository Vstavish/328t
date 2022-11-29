var ctx = document.getElementById("myChart").getContext('2d');

// Define the data
var data = [{
  x: 3.96825,
  y: 30.63328424
}, {
  x: 6.45161,
  y: 27.48163496
}, {
  x: 1.3986,
  y: 26.68863262
}, {
  x: 4.8951,
  y: 34.14250393
}, {
  x: 0,
  y: 9.258790792
}, {
  x: 8.04598,
  y: 21.2745098
}, {
  x: 1.05263,
  y: 38.58713762
}, {
  x: 1.63934,
  y: 17.19266607
}, {
  x: 9.25926,
  y: 30.32460137
}, {
  x: 2.10526,
  y: 34.89096573
}, {
  x: 4.16667,
  y: 15.98954143
}, {
  x: 9.52381,
  y: 30.68965517
}, {
  x: 1.04167,
  y: 32.40827846
}, {
  x: 15.7895,
  y: 11.27798243
}, {
  x: 3.84615,
  y: 29.70784935
}, {
  x: 12.5,
  y: 10.17402945
}, {
  x: 6.09756,
  y: 31.23107972
}, {
  x: 4.21053,
  y: 30.82330886
}, {
  x: 4.34783,
  y: 20.9868832
}, {
  x: 3.37079,
  y: 21.61016949
}, {
  x: 2.73973,
  y: 37.09880428
}, {
  x: 25,
  y: 4.46400503
}, {
  x: 4,
  y: 35.59611121
}, {
  x: 2.15054,
  y: 42.434663
}, {
  x: 2.15054,
  y: 14.69561846
}, {
  x: 0,
  y: 20.80717489
}, {
  x: 8.53659,
  y: 16.14629795
}, {
  x: 0,
  y: 16.89524365
}, {
  x: 3.44828,
  y: 33.38217338
}, {
  x: 23.0769,
  y: 9.323058326
}, {
  x: 6.59341,
  y: 16.95408735
}, {
  x: 4.34783,
  y: 24.96616032
}, {
  x: 4.81928,
  y: 30.74372335
}, {
  x: 13.6364,
  y: 14.62103331
}, {
  x: 17.6471,
  y: 16.05161875
}, {
  x: 3.44828,
  y: 36.18532296
}, {
  x: 8.33333,
  y: 33.46601347
}, {
  x: 14.2857,
  y: 12.13030433
}, {
  x: 20,
  y: 10.01663894
}, {
  x: 0,
  y: 18.8228863
}, {
  x: 6.38298,
  y: 40.52449283
}, {
  x: 7.14286,
  y: 24.32432432
}, {
  x: 4.6875,
  y: 18.65657521
}, {
  x: 4.91803,
  y: 31.23694593
}, {
  x: 5.35714,
  y: 40.91135458
}, {
  x: 6.25,
  y: 30.12912482
}, {
  x: 1.92308,
  y: 37.87553648
}, {
  x: 1.62602,
  y: 7.899571341
}, {
  x: 22.2222,
  y: 30.2690583
}, {
  x: 8.06452,
  y: 36.65280665
}, {
  x: 3.9604,
  y: 37.03256936
}, {
  x: 3.92157,
  y: 26.57299939
}, {
  x: 4.34783,
  y: 38.98305085
}, {
  x: 2.91262,
  y: 23.21911632
}, {
  x: 2.91262,
  y: 28.91156463

         }]; // Add data values to array
// End Defining data
var options = {responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
};

// End Defining data
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
                label: '', // Name the series
                data: data, // Specify the data values array
          borderColor: '#2196f3', // Add custom color border
          backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Neighborhoods with better internet access typically produce better 8th grade math scores',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'As the percentage of people in a neighborhood without internet access goes down, middle school math scores go up, according to Open baltimore data.'
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
