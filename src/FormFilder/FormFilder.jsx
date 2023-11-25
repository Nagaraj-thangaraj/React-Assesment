import React, { useState,useEffect,useContext } from "react";
import { Context } from "../Context/Context";
import Navigation from "./NavigationBar/Navigation";
import { Box, Grid ,TableCell,TableBody,TableRow,TableContainer,Paper,Table,TableHead} from "@mui/material";
import { IOSSwitch } from "./IosSwitch";


export default function FormFilder() {
  const {apiData,setApiData} =
  useContext(Context);
  const tableData = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/63ad5e5f01125b4ffc5f"
      );
      const result = await response.json();
      setApiData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    tableData();
  },[])

  return (
    <div>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p
              style={{
                color: "gray",
                position: "fixed",
                top: 60,
                left: 120,
                fontWeight: "bold",
              }}
            >
              {" "}
              Build your form with
            </p>
            <p
              style={{
                position: "fixed",
                top: 70,
                left: 115,
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              VM FORM BUILDER
            </p>
            <p
              style={{
                position: "fixed",
                top: 140,
                left: 115,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Build powerful and secure forms - without code to regenerate in
              your code
            </p>
            <p
              style={{
                position: "fixed",
                top: 160,
                left: 115,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              application or website{" "}
            </p>
            <img
              src="https://media.licdn.com/dms/image/D4D12AQH8ebpiWYvuVg/article-cover_image-shrink_600_2000/0/1667283007210?e=1706140800&v=beta&t=gsN5Dp9MgvSytUwSD1Q4VGR8ZueQYhxBfqK3O71fYdI"
              alt="img"
              id="image"
            />
          </Grid>
          <Grid xs={6}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="right">Form Name</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <IOSSwitch/>
              </TableCell>
              <TableCell align="right">{row.formName}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
