var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['China','India', 'United States', 'Indonesia', 'Brazil', 'Russia', 'Pakistan', 'Bangladesh','Japan', 'Nigeria', 'Mexico', 'Germany', 'Vietnam', 'Philippines', 'Egypt', 'Ethiopia', 'Iran', 'Turkey', 'Thailand', 'France', 'United Kingdom', 'Italy', 'Ukraine', 'Congo, Dem. Rep.', 'Myanmar', 'South Africa', 'Spain', 'Colombia', 'Poland', 'Argentina', 'Tanzania', 'Algeria', 'Kenya', 'Canada', 'Morocco', 'Sudan', 'Peru', 'Uzbekistan', 'Venezuela', 'Uganda', 'Nepal', 'Iraq', 'Malaysia', 'Taiwan','Romania', 'Saudi Arabia', 'Afghanistan', 'Australia','Ghana', 'Sri Lanka'],
        datasets: [{
            label: '',
            data: [3678, 2548, 45986, 5878, 11461, 13173, 3366, 1632, 32193, 2836, 14704, 36953, 2650, 4243, 7807, 623, 11719, 13025, 8939, 34774, 32543, 36073, 4809, 531, 2069, 9927, 30647, 8414, 14565, 11504, 1488, 9885, 2143, 37314, 4430, 2258, 6485, 2471, 14461, 1042, 1577, 11764, 15695, 34205, 9970,
              37531, 962, 35253, 2273, 4946],
            backgroundColor: [
                '#ff0800'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP BY Country',
                font: {
                    size: 18
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
