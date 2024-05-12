import { Box, Button } from "@mui/material";
import { AlertWidget, DropDown, Input, Switch } from "components/common";
import { options } from "constants/chartsData";
import { graphOptions } from "constants/graphOptions";
import { meterReadings } from "constants/meterReadings";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useForm } from "react-hook-form";
import styles from "./styles";

const Dashboard = () => {
  const [selectedMeters, setSelectedMeters] = useState(["M1"]);
  const [, setAlertWidgetOptions] = useState({});

  /**
   * React Hook form for managing forms
   */
  const {
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      graphType: "Line",
      switchAlert: true,
    },
    mode: "all",
    criteriaMode: "all",
  });

  /**
   * Rendering Meter data
   */
  const meterData = meterReadings.map((entry) => ({
    timestamp: entry.Timestamp,
    power: selectedMeters.reduce((acc, meter) => {
      acc += parseFloat(entry[`${meter} Power (Watts)`]);
      return acc;
    }, 0),
  }));

  /**
   * Rendering Chart data
   */
  const chartData = {
    labels: meterData.map((entry) => entry.timestamp),
    datasets: selectedMeters.map((meter) => ({
      label: `${meter} Power (Watts)`,
      data: meterData.map((entry) => entry.power),
      fill: false,
      backgroundColor:
        meter === "M1"
          ? "rgb(255, 99, 132)"
          : meter === "M2"
          ? "#073a8c"
          : meter === "M3"
          ? "#54021a"
          : "rgb(75, 192, 192)",
      borderColor:
        meter === "M1"
          ? "rgb(255, 99, 132)"
          : meter === "M2"
          ? "#073a8c"
          : meter === "M3"
          ? "#54021a"
          : "rgb(75, 192, 192)",
      tension: 0.5,
    })),
  };

  const toggleMeter = (meter) => {
    const updatedMeters = selectedMeters.includes(meter)
      ? selectedMeters.filter((m) => m !== meter)
      : [...selectedMeters, meter];
    setSelectedMeters(updatedMeters);
  };

  const handleAlertWidgetOptionsChange = (newOptions) => {
    setAlertWidgetOptions(newOptions);
  };

  useEffect(() => {
    selectedMeters.length === 0 && setValue("switchAlert", false);
  }, [selectedMeters.length, setValue]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Polaris Metering Solution</Box>
      <Box sx={styles.formWrapper}>
        <DropDown
          name="graphType"
          label="Graph Type"
          control={control}
          customStyles={styles.input}
          options={graphOptions}
        />
        <Input
          type="time"
          name="startTime"
          label="Start Time"
          customStyles={styles.input}
          control={control}
          errors={errors}
        />
        <Input
          type="time"
          name="endTime"
          label="End Time"
          customStyles={styles.input}
          control={control}
          errors={errors}
        />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Box sx={styles.chooseMeter}>Choose Your Meter</Box>
        <Box sx={styles.buttonWrapper}>
          {["M1", "M2", "M3", "M4"].map((meter) => (
            <Button
              sx={{
                ...styles.button,
                color: selectedMeters.includes(meter)
                  ? "white"
                  : "primary.main",
                backgroundColor: selectedMeters.includes(meter)
                  ? "primary.main"
                  : "transparent",
                "&:hover": {
                  color: selectedMeters.includes(meter)
                    ? "white"
                    : "primary.main",
                  backgroundColor: selectedMeters.includes(meter)
                    ? "primary.main"
                    : "transparent",
                },
              }}
              key={meter}
              onClick={() => toggleMeter(meter)}
            >
              {meter}
            </Button>
          ))}
        </Box>
        <Box sx={styles.toggle}>
          <Switch name="switchAlert" label="Toggle Alert" control={control} />
        </Box>
      </Box>
      <Box sx={styles.graphWrapper}>
        {watch("graphType") === "Line" ? (
          <Line options={options} data={chartData} />
        ) : (
          <Bar options={options} data={chartData} />
        )}
      </Box>
      {selectedMeters.length !== 0 && watch("switchAlert") && (
        <AlertWidget
          chartData={chartData}
          onOptionsChange={handleAlertWidgetOptionsChange}
        />
      )}
    </Box>
  );
};

export default Dashboard;
