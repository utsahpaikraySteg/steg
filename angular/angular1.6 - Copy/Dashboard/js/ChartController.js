app.controller('ChartController', function($scope) {

    $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "10.0.0.80",
            values: [20],
            backgroundColor: "#FA6E6E #FA9494",
        }, {
            text: "167.114.156.198",
            values: [30],
            backgroundColor: "#F1C795 #feebd2"
        }, {
            text: "103.24.77.25",
            values: [10],
            backgroundColor: "#FDAA97 #FC9B87"
        }, {
            text: "46.4.68.142",
            values: [20],
            backgroundColor: "#28C2D1"
        }, {
            text: "10.0.0.117",
            values: [30],
            backgroundColor: "#D2D6DE",
        }]
    };
});