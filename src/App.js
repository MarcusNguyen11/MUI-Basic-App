import { Pagination } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import "./styles.css";
import jobs from "./jobs.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemPerPage = 5;
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchAppBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage page={page} itemPerPage={itemPerPage} />}
          />
          <Route path="/job/:id" element={<DetailPage />} />
        </Routes>
        <div className="pagination">
          <Pagination
            count={Math.trunc((jobs.length - 1) / itemPerPage) + 1}
            page={page}
            onChange={handleChange}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
