import React from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function HomePage({ jobs, page, itemPerPage }) {
  console.log(page);
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {jobs
          .slice(itemPerPage * (page - 1), page * itemPerPage)
          .map((job) => (
            <Grid key={job.id} item xs={12} md={4} lg={4}>
              <JobCard job={job} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
