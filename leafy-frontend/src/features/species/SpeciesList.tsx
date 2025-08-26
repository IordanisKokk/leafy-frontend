// src/components/SpeciesList.tsx
import { Grid, CircularProgress, Alert, Container } from "@mui/material";
// Update the import path if the hook is located elsewhere, for example:
import { useSpecies } from "./useSpecies";
import { PlantCard } from "./PlantCard";

export function SpeciesList() {
  const { data: species, isLoading, error } = useSpecies();

  if (isLoading) return <CircularProgress />;
  if (error)     return <Alert severity="error">{error.message}</Alert>;

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {species!.map((s) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}}  key={s.id}>
            <PlantCard plant={s} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
