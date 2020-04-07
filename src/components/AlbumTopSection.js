import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Nav from "./Nav";

export default function AlbumTopSection(props) {
  return (
    <div className={""}>
      <Container maxWidth="sm">
        <Typography
          style={{ marginTop: 15 }}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          HandMade Clothing
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          By Kimlang
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Making beautiful crochet clothing is my passion. I can make many
          different designs, sizes and customize colors however you like.
        </Typography>
        <div className={""}>
          <Grid style={{ padding: 0 }} container spacing={2} justify="center">
            <Grid item>
              <Nav
                showFilters={props.showFilters}
                products={props.allproducts}
                cb={props.filterProducts}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
