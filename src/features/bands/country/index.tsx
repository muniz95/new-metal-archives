import { Box, Container, Typography, Grid } from "@mui/material";
import { countries } from "./countries";
import { Link } from "react-router-dom";

const BandsByCountry = () => {
  return (
    <Container>
      <Typography variant="h6">Browse Bands - by Country</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {countries.map((country) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} key={country.url}>
            <Link to={`/bands/country/${country.url}`}>{country.name}</Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BandsByCountry;
