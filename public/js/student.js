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

let sid = document.getElementById("mydiv").dataset.test;
bar1();
bar2();

async function bar1() {
  sid = sid.toUpperCase();
  let result = fetch(`/student/marks/${sid}`);
  result.then((resp) => {
    resp.json().then((data) => {
      const barChart = new Chart(document.getElementById("barChart1"), {
        type: "bar",
        data: {
          labels: ["DBMS", "CN", "DAA", "DP", "MAP"],
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

async function bar2() {
  sid = sid.toUpperCase();
  let result = fetch(`/student/attendence/${sid}`);
  result.then((resp) => {
    resp.json().then((data) => {
      let avgatd = fetch(`/attendence`);
      avgatd.then((resp1) => {
        resp1.json().then((data1) => {
          let dataArr = [data[0],data1[0]]
          const barChart = new Chart(document.getElementById("barChart2"), {
            type: "bar",
            data: {
              labels: [sid,"Class Average"],
              datasets: [
                {
                  data: dataArr,
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
    });
  });
}
