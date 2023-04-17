import React from "react";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";



function DetailPage({isLogin}) {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  return (
    <Container sx={{ with: 900 }}>
      <Grid>
        <JobCard job={job} isLogin={isLogin} />
      </Grid>
    </Container>
  );
}

export default DetailPage;
