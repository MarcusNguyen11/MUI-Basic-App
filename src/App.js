import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import "./styles.css";
import jobdata from "./jobs.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LoginPage from "./pages/LoginPage";
import { useSearchParams, useLocation } from "react-router-dom";
// import Modal from "./components/Modal";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [page, setPage] = React.useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemPerPage = 5;
  let [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState(jobdata);

  useEffect(() => {
    if (searchParams) {
      setJobs(
        jobdata.filter((job) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = job.title.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
      );
    } else {
      setJobs(jobdata);
    }
  }, [searchParams]);

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchAppBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <Routes location={background || location}>
          <Route
            path="/"
            element={
              <HomePage
                jobs={jobs}
                page={page}
                itemPerPage={itemPerPage}
                searchParams={searchParams}
                isLogin={isLogin}
              />
            }
          />
          <Route path="/job/:id" element={<DetailPage isLogin={isLogin} />} />
          <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />} />
        </Routes>
        {background && (
        <Routes>
          <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />} />
        </Routes>
      )}
        <div className="pagination">
            <Pagination
              sx={{ mt: 1 }}
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
