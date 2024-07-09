import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Grid
        className=" text-center mt-10 border"
        container
        sx={{ bgcolor: "white", color: "black", py: 3 }}
      >
        {/* Logo and intro */}
        <Grid item xs={12} md={3}>
          {/* <Typography sx={{ fontWeight: 'bold' }} variant='h4' className='pb-5'>Samagrii</Typography> */}
          <Box
            component="img"
            className="mx-auto"
            sx={{
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://www.samagrii.com/static/media/logo.66792d885f8c2d50f1d0.png"
          />
          <Typography className="px-8">
            We are Samagrii. Samagrii is a one stop solution for all your
            religious ceremonies. We are committed to provide you with the most authentic Samagrii in the best possible manner.
          </Typography>
        </Grid>
        {/* Quick Links */}
        <Grid item xs={12}md={3}>
          <Typography className="pb-5" variant="h6">
            Quick Links
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Home{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Shop{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Our Story
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blogs
            </Button>
          </div>
        </Grid>
        {/* IPR */}
        <Grid item xs={12}md={3}>
          <Typography className="pt-5 pb-3" variant="h6">
            {" "}
            Customer{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Privacy Policy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Terms & Conditions{" "}
            </Button>
          </div>
        </Grid>
        {/* Connect with us */}
        <Grid item xs={12}md={3}>
          <Typography className="pt-5 pb-3" variant="h6">
            {" "}
            Connect with us{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Detail 1{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Detail 2{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Detail 3{" "}
            </Button>
          </div>
        </Grid>
      </Grid>
      <p className="text-center py-5">COPYRIGHT © 2024 सामग्री - ALL RIGHTS RESERVED.</p>
    </div>
  );
}
