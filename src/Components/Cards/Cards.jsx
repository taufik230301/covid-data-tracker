import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";


const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  let carddetails = [
    {
      style: styles.infected,
      text: "Positif",
      value: confirmed.value,
      bottomText: "Total Positif dari COVID-19",
    },
    {
      style: styles.recovered,
      text: "Sembuh",
      value: recovered.value,
      bottomText: "Total sembuh dari COVID-19",
    },
    {
      style: styles.deaths,
      text: "Kematian",
      value: deaths.value,
      bottomText: "Total Kematian dari COVID-19",
    },
    {
      style: styles.active,
      text: "Kasus Aktif",
      value: active,
      bottomText: "Total Kasus Aktif dari COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={50} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={4}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "40px 40.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography color="primary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h7">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body4">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
              <Typography variant="body1">{detail.bottomText}</Typography>
              <Typography color="textPrimary"> {country} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
