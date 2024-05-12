import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./styles";

const AlertWidget = ({ chartData }) => {
  const [alerts, setAlerts] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateAlerts = () => {
    const powerConsumptionData = chartData.datasets[0].data;
    const timestamps = chartData.labels;

    const powerThreshold = 1000;
    const leakageThreshold = 300;

    const alerts = [];

    let totalPower = 0;
    for (let i = 0; i < powerConsumptionData.length; i++) {
      totalPower += powerConsumptionData[i];
      if (totalPower > powerThreshold) {
        alerts.push({
          timestamp: timestamps[i],
          message: "Power exceeds 1000 Watts",
        });
      }
    }

    // Check for leakage current exceeding threshold
    for (let i = 0; i < powerConsumptionData.length; i++) {
      const masterMeterReading = powerConsumptionData[i];
      const sumOfMeters =
        powerConsumptionData.reduce((acc, val) => acc + val, 0) -
        masterMeterReading;
      const leakageCurrent = masterMeterReading - sumOfMeters;
      if (leakageCurrent > leakageThreshold) {
        alerts.push({
          timestamp: timestamps[i],
          message: "Leakage current exceeds 300 Watts",
        });
      }
    }

    setAlerts(alerts);
  };

  // Function to handle click on an alert
  const handleAlertClick = (timestamp) => {
    const timestampIndex = chartData.labels.indexOf(timestamp);
    const newChartOptions = {
      ...chartOptions,
      scales: {
        xAxes: [
          {
            type: "time",
            ticks: {
              callback: function (value, index) {
                return index === timestampIndex
                  ? value + " (Highlighted)"
                  : value;
              },
            },
          },
        ],
      },
    };
    setChartOptions(newChartOptions);
  };

  useEffect(() => {
    generateAlerts();
    setChartOptions({});
  }, [generateAlerts]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Meter Alerts</Box>
      <Box component="ul" sx={styles.listWrapper}>
        {alerts.map((alert, index) => (
          <Box
            key={index}
            sx={styles.list}
            onClick={() => handleAlertClick(alert.timestamp)}
          >
            {index + 1}. {alert.message} at : <b>{alert.timestamp}</b>
          </Box>
        ))}
      </Box>
      <Box sx={styles.heading}>Power Consumption Graph</Box>
      <Line data={chartData} />
    </Box>
  );
};

export default AlertWidget;
