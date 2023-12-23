import React, { useState } from "react";
import { Box } from "@mui/material";
import DashBoardTable from "../components/DashBoardTable";

import Data from "../data.json";

import styles from "./Home.module.css";

const Home = () => {
  const [campaignsData, setCampaignsData] = useState(Data.campaigns);
  const [groupData, setGroupData] = useState(Data.group);

  return (
    <Box className={styles.table}>
      <DashBoardTable
        type="Campaigns"
        data={campaignsData}
        setData={setCampaignsData}
      />
      <DashBoardTable
        doughnutChart
        type="Group"
        data={groupData}
        setData={setGroupData}
      />
    </Box>
  );
};

export default Home;
