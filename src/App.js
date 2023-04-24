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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const itemPerPage = 5;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [isLogin, setIsLogin] = useState(false);
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
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="/job/:id"
            element={<DetailPage setIsLogin={setIsLogin} isLogin={isLogin} />}
          />
          <Route
            path="/login"
            element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />}
          />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/login"
              element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />}
            />
          </Routes>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
