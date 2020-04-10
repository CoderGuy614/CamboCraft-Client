import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TopNavbar from "../components/TopNavBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import AlbumTopSection from "./AlbumTopSection";
import Footer from "./Footer";

export default class Album extends React.Component {
  state = {
    showFilters: true,
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
        <main>
          <AlbumTopSection
            allproducts={this.state.allproducts}
            showFilters={this.state.showFilters}
            filterProducts={this.filterProducts}
          />
          <Container className={""} maxWidth="md">
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
                          {e.minPrice.toFixed(2)}
                        </span>
                        <span className="inStock">
                          <i className="fas fa-store" />{" "}
                          {`In Stock: ${e.inStock}`}
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
                    maxWidth="sm"
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
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
        <Footer />
      </React.Fragment>
    );
  }
}
