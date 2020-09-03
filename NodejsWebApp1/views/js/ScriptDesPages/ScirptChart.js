
  

var ctx = document.getElementById('myChart').getContext('2d');
var gradientStroke = ctx.createLinearGradient(1000, 0, 500, 0);


var gradientFill = ctx.createLinearGradient(1000, 0, 0, 0);
gradientFill.addColorStop(0, "rgb(0, 0, 0)");
gradientFill.addColorStop(0.05, "rgb(105, 0, 0)");
gradientFill.addColorStop(0.1, "rgb(155, 0, 0)");
gradientFill.addColorStop(0.15, "rgb(205,0, 0)");
gradientFill.addColorStop(0.2, "rgb(255, 0, 0)");
gradientFill.addColorStop(0.25, "rgb(255, 105, 0)");
gradientFill.addColorStop(0.3, "rgb(255, 155, 0)");
gradientFill.addColorStop(0.35, "rgb(255, 205, 0)");
gradientFill.addColorStop(0.4, "rgb(255, 255, 0)");
gradientFill.addColorStop(0.45, "rgb(125, 255, 0)");
gradientFill.addColorStop(0.5, "rgb(0, 255, 0)");
gradientFill.addColorStop(0.55, "rgb(0, 255, 125)");
gradientFill.addColorStop(0.6, "rgb(0, 205, 205)");
gradientFill.addColorStop(0.65, "rgb(55, 155, 255)");
gradientFill.addColorStop(0.7, "rgb(55, 105, 255)");
gradientFill.addColorStop(0.75, "rgb(55, 55, 255)");
gradientFill.addColorStop(0.8, "rgb(55, 0, 255)");
gradientFill.addColorStop(0.85, "rgb(55, 0, 205)");
gradientFill.addColorStop(0.9, "rgb(55, 0, 155)");
gradientFill.addColorStop(0.95, "rgb(55, 0, 105)");


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['390 nm', '403 nm', '405 nm','410 nm', '425 nm', '440 nm', '450 nm', '470 nm', '480 nm',
            '490 nm', '502 nm', '512 nm', '520 nm', '530 nm', '544 nm', '590 nm', '605 nm',
            '620 nm', '629 nm', '630 nm', '655 nm', '660 nm', '680 nm','730 nm'
        ],
        datasets: [{
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            fill: true,

            backgroundColor: gradientFill,

            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
    },
    options: {
        legend: {
            display: false
        },
        maintainAspectRatio: false,

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min:0,
                    max:100,
                    display: false


                }
            }]
        }
    }
    // Configuration options go here
});

//changement visuel en temps réel


function changeData() {

    chart.data.datasets[0].data = setGraph();
    chart.update();
    console.log(chart.data.datasets[0].data);
}