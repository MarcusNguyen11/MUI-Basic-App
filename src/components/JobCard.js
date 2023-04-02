import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

export default function MiddleDividers({ job }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 1,  bgcolor: "SlateGray" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              {job.title}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          {job.description}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Skill Requirement
        </Typography>
        <Stack sx={{flexWrap:"wrap"}} gap={1} direction="row" spacing={0.5}>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip label={skill} size="small" color="default" />
          ))}
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button onClick={() => navigate(`/job/${job.id}`)}>
          More Information
        </Button>
      </Box>
    </Box>
  );
}
