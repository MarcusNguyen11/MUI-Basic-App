import React from "react";
import jobs from "../jobs.json";
import JobCardDetail from "../components/JobCarDetail";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import LoginPage from "./LoginPage";

function DetailPage({ isLogin, setIsLogin }) {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  console.log(`Detail page`, isLogin);
  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  if (isLogin === true) {
    return (
      <Container sx={{ with: 900, mt: 5 }}>
        <Grid>
          <JobCardDetail job={job} />
        </Grid>
      </Container>
    );
  } else {
    return <LoginPage setIsLogin={setIsLogin} isLogin={isLogin} job={job} />;
  }
}

export default DetailPage;
