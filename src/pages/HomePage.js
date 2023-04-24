import React from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Pagination } from "@mui/material";

function HomePage({ jobs, page, itemPerPage, isLogin, handleChange }) {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {jobs.slice(itemPerPage * (page - 1), page * itemPerPage).map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={4}>
            <JobCard job={job} isLogin={isLogin} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <Pagination
          sx={{ mt: 1 }}
          count={Math.trunc((jobs.length - 1) / itemPerPage) + 1}
          page={page}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}

export default HomePage;
