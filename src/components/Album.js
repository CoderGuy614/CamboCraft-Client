import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import axios from "axios";
import Nav from "./Nav";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "@material-ui/core/Dialog";
import FlatButton from "material-ui/FlatButton";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CamboCraft
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default class Album extends React.Component {
  state = {
    open: false,
    currentImg: "",
    loading: true,
    products: [],
    allproducts: [],
  };
  filterProducts = (filtered) => {
    this.setState({ products: filtered });
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/products`)
      .then((dat) =>
        this.setState({
          products: dat.data,
          allproducts: dat.data,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" color="transparent">
          <Toolbar></Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
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
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                By Kimlang
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Making beautiful crochet clothing is my passion. I can make many
                different designs, sizes and customize colors however you like.
              </Typography>
              <div className={""}>
                <Grid
                  style={{ padding: 0 }}
                  container
                  spacing={2}
                  justify="center"
                >
                  <Grid item>
                    <Nav
                      showFilters="true"
                      products={this.state.allproducts}
                      cb={this.filterProducts}
                    />
                  </Grid>
                  {/* <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid> */}
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={""} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.products.map((e, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card className={"card"}>
                    <CardMedia
                      style={{ height: 200, paddingTop: "56%" }}
                      className={""}
                      image={e.photos[0]}
                      title="Image title"
                      onClick={() => this.handleOpen(e.photos[0])}
                    />
                    <CardContent style={{ height: 170 }} className={""}>
                      <div className="info">
                        <span className="price">
                          <i className="fas fa-dollar-sign" />{" "}
                          {e.avg.toFixed(2)}
                        </span>
                        <span className="inStock">
                          <i className="fas fa-store" /> In Stock:{" "}
                        </span>
                      </div>
                      <Typography gutterBottom variant="h5" component="h2">
                        {e.name}
                      </Typography>
                      <Typography>{e.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href={`/product/${e._id}`}
                        fullWidth={true}
                        size="large"
                        color="primary"
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                  <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    <img
                      src={this.state.currentImg}
                      alt=""
                      style={{ width: "100%" }}
                      onClick={this.handleClose}
                    />
                  </Dialog>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={"footer"}>
          <Typography variant="h6" align="center" gutterBottom>
            Thank you for loooking!
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Please contact Kimlang to see and try any of these designs
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
