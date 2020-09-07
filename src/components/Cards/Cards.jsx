import React from "react";
import { Card, Typography, Grid, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
// { data: { confirmed, recovered, deaths, lastUpdate } }
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading ...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number Of Active Cases Of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          s={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number Of Recoveries From Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          s={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number Of Deaths Caused By Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
