import React, { useState } from "react";

import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableContainer,
  Toolbar,
  Typography,
} from "@mui/material";

import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";

import styles from "./DashBoardTable.module.css";

const DashBoardTable = ({ data, setData, type }) => {
  const [sortBy, setSortBy] = useState("ascending");

  const sortingData = (string) => {
    if (sortBy === "ascending") {
      const sortedData = [...data].sort((a, b) =>
        a[string] < b[string] ? 1 : -1
      );
      setData(sortedData);
      setSortBy("descending");
    }
    if (sortBy === "descending") {
      const sortedData = [...data].sort((a, b) =>
        a[string] > b[string] ? 1 : -1
      );
      setData(sortedData);
      setSortBy("ascending");
    }
  };

  let totalCost = data.map((el) => el.cost).reduce((sum, i) => sum + i, 0);
  let totalCoversion = data
    .map((el) => el.conversions)
    .reduce((sum, i) => sum + i, 0);
  let totalRevenue = data
    .map((el) => el.revenue)
    .reduce((sum, i) => sum + i, 0);
  let totalClicks = data.map((el) => el.clicks).reduce((sum, i) => sum + i, 0);

  return (
    <>
      <Paper className={styles.tableOutline}>
        <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Ad Insights
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: "#f8f9fa" }}>
              <TableRow>
                <TableCell onClick={(e) => sortingData("campaigns")}>
                  {type}
                </TableCell>
                <TableCell onClick={() => sortingData("clicks")} align="right">
                  Clicks
                </TableCell>
                <TableCell onClick={() => sortingData("cost")} align="right">
                  Cost
                </TableCell>
                <TableCell
                  onClick={() => sortingData("conversions")}
                  align="right"
                >
                  Conversions
                </TableCell>
                <TableCell onClick={() => sortingData("revenue")} align="right">
                  Revenue
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element) => (
                <TableRow key={element.id}>
                  <TableCell>{element.campaigns}</TableCell>
                  <TableCell align="right">{element.clicks}</TableCell>
                  <TableCell align="right">USD {element.cost}</TableCell>
                  <TableCell align="right">{element.conversions}</TableCell>
                  <TableCell align="right">USD {element.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter sx={{ background: "#f8f9fa" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {totalClicks}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  USD {totalCost}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {totalCoversion}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  USD {totalRevenue}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default DashBoardTable;
