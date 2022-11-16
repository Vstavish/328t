var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#D4727D",
                backgroundColor: "rgb(212, 114, 125)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#78586F",
                backgroundColor: "rgb(120, 88, 111)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#4C5F6B",
                backgroundColor:"rgb(76, 95, 107)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#FED18C",
                backgroundColor:"rgb(254, 209, 140)",
                borderWidth:2,

              }, {

                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#94BFBE",
                backgroundColor:"rgb(148, 191, 190)",
                borderWidth:2,

              }, {

                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#6E75A8",
                backgroundColor:"rgb(110, 117, 168)",
                borderWidth:2,

              }, {

                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#E5BEED",
                backgroundColor:"rgb(229, 190, 237)",
                borderWidth:2,

              }, {

                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#6A8E7F",
                backgroundColor:"rgb(106, 142, 127)",
                borderWidth:2,
              }, {

                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#551B14",
                backgroundColor:"rgb(85, 27, 20)",
                borderWidth:2,
              }

            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Japan and the U.S. surpass other top countries in both GDP and life expectancy',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Brazil and Russia have the third and fourth highest GDPs, but still lag far behind Japan and the U.S. in both GDP and life expectancy.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              },
            }
          }
        });
