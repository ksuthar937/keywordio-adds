import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import styles from "./DoughnutChart.module.css";

export default function DoughnutChart({ data }) {
  const [metricField, setMatricField] = useState("clicks");

  const handleChange = (event) => {
    setMatricField(event.target.value);
  };

  return (
    <>
      <Box className={styles.chart}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select value={metricField} onChange={handleChange}>
            <MenuItem value="clicks">Clicks</MenuItem>
            <MenuItem value="cost">Cost</MenuItem>
            <MenuItem value="conversions">Conversions</MenuItem>
            <MenuItem value="revenue">Revenue</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="row">
          <PieChart
            series={[
              {
                innerRadius: 70,
                paddingAngle: 2,
                data: [
                  ...data.map((el) => ({
                    id: el.id,
                    value: el[metricField],
                    label: el.campaigns,
                  })),
                ],
              },
            ]}
            width={450}
            height={200}
          />
        </Stack>
      </Box>
    </>
  );
}
