const subjects = ["DBMS", "CN", "DAA", "DP", "MAP"];

const cssColors = (color) => {
  return getComputedStyle(document.documentElement).getPropertyValue(color);
};

const getColor = () => {
  return window.localStorage.getItem("color") ?? "cyan";
};

const colors = {
  primary: cssColors(`--color-${getColor()}`),
  primaryLight: cssColors(`--color-${getColor()}-light`),
  primaryLighter: cssColors(`--color-${getColor()}-lighter`),
  primaryDark: cssColors(`--color-${getColor()}-dark`),
  primaryDarker: cssColors(`--color-${getColor()}-darker`),
};


async function doughnut() {
  let avgMrk = 0;
  let result = fetch("/avgmarks");
  result.then((resp) =>
    resp.json().then((data) => {
      avgMrk = ((data[0] + data[1] + data[2] + data[3] + data[4]+ data[5] + data[6] + data[7] + data[8] + data[9])/10).toFixed(2)
      document.getElementById("avgMks").innerHTML = avgMrk
      const doughnutChart1 = new Chart(
        document.getElementById("doughnutChart1"),
        {
          type: "doughnut",
          data: {
            labels: subjects,
            datasets: [
              {
                data: [data[0],data[1],data[2],data[3],data[4]],
                backgroundColor: [
                  colors.primary,
                  colors.primaryLighter,
                  colors.primaryLight,
                  colors.primaryDark,
                  colors.primaryDarker,
                ],
                hoverBackgroundColor: colors.primaryDark,
                borderWidth: 0,
                weight: 0.5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: "bottom",
            },

            title: {
              display: false,
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
          },
        }
      );
      const doughnutChart2 = new Chart(
        document.getElementById("doughnutChart2"),
        {
          type: "doughnut",
          data: {
            labels: subjects,
            datasets: [
              {
                data: [data[5],data[6],data[7],data[8],data[9]],
                backgroundColor: [
                  colors.primary,
                  colors.primaryLighter,
                  colors.primaryLight,
                  colors.primaryDark,
                  colors.primaryDarker,
                ],
                hoverBackgroundColor: colors.primaryDark,
                borderWidth: 0,
                weight: 0.5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: "bottom",
            },

            title: {
              display: false,
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
          },
        }
      );
    })
  );
}

doughnut();
bar();

async function bar() {
  let result = fetch("/attendence");
  result.then((resp) => {
    resp.json().then((data) => {
      let avgAtd = ((data[0] + data[1])/2).toFixed(2) + '%'
      let Aatd = data[2]
      let Batd = data[3]
      document.getElementById("aAtd").innerHTML= Aatd
      document.getElementById("bAtd").innerHTML= Batd
      document.getElementById("avgAtd").innerHTML= avgAtd
      const barChart = new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
          labels: ["SEC A", "SEC B"],
          datasets: [
            {
              data: data,
              backgroundColor: colors.primary,
              hoverBackgroundColor: colors.primaryDark,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                gridLines: false,
                ticks: {
                  beginAtZero: true,
                  stepSize: 50,
                  fontSize: 12,
                  fontColor: "#97a4af",
                  fontFamily: "Open Sans, sans-serif",
                  padding: 10,
                },
              },
            ],
            xAxes: [
              {
                gridLines: false,
                ticks: {
                  fontSize: 12,
                  fontColor: "#97a4af",
                  fontFamily: "Open Sans, sans-serif",
                  padding: 5,
                },
                categoryPercentage: 0.5,
                maxBarThickness: "40",
              },
            ],
          },
          cornerRadius: 2,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        },
      });
    });
  });
}
