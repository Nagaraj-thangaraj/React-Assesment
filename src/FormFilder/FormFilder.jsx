import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import Navigation from "./NavigationBar/Navigation";

import {
  Box,
  Grid,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { IOSSwitch } from "./IosSwitch";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";

export default function FormFilder() {
  const { apiData, setApiData } = useContext(Context);
  const [page, setPageChange] = useState(1);
  const [rowPer, rowPerChange] = useState(10);

  //PAGENATION FUNCTION

  function handlePageChange(event, newPage) {
    setPageChange(newPage);
  }
  function handleRow(event) {
    rowPerChange(parseInt(event.target.value, 10));
  }
  const tableData = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/f9ffccaa33512e50f330"
      );
      const result = await response.json();
      setApiData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    tableData();
  }, []);
  return (
    <div>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div>
              <p
                style={{
                  color: "gray",
                  position: "relative",
                  top: 60,
                  left: 10,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Build your form with
              </p>
              <p
                style={{
                  position: "relative",
                  top: 40,
                  left: 10,
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                VM FORM BUILDER
              </p>
              <p
                style={{
                  position: "relative",
                  top: 30,
                  left: 5,
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Build powerful and secure forms - without code to regenerate in
                your code
              </p>
              <img
                src="https://media.licdn.com/dms/image/D4D12AQH8ebpiWYvuVg/article-cover_image-shrink_600_2000/0/1667283007210?e=1706140800&v=beta&t=gsN5Dp9MgvSytUwSD1Q4VGR8ZueQYhxBfqK3O71fYdI"
                alt="img"
                style={{ position: "relative", top: 20, width: 400 }}
              />
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <TableContainer
              component={Paper}
              sx={{ marginTop: 14, marginRight: 20 }}
            >
              <Table
                sx={{ minWidth: 550 }}
                size="small"
                aria-label="a dense table"
                className="main"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Form Name</TableCell>
                    <TableCell align="right">Created Date</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apiData &&
                    apiData
                      .slice(page * rowPer, page * rowPer + rowPer)
                      .map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <IOSSwitch />
                          </TableCell>
                          <TableCell align="right">{row.formName}</TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                          <TableCell align="right">
                            {" "}
                            <EditCalendarIcon /> <AddToPhotosIcon />{" "}
                            <AttachmentIcon />{" "}
                            <DeleteForeverSharpIcon
                              sx={{ color: "red" }}
                            />{" "}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={2} sx={{ marginTop: 2 }}>
              <Pagination
                count={5}
                page={page}
                rowsPerPage={rowPer}
                onChange={handlePageChange}
                onRowsPerPageChange={handleRow}
                color="primary"
                showFirstButton
                showLastButton
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
