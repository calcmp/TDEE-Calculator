import React from "react";
import { Paper, Grid, withStyles } from "@material-ui/core/";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 120,
    flexBasis: 200
  },
  root: {
    width: "100%",
    overflowX: "auto",
    flexGrow: 1
  },
  table: {
    minWidth: 700
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  textField: {
    margin: theme.spacing.unit * 1,
    flexBasis: 200,
    marginTop: 20
  },
  list: {
    marginTop: -10
  },
  formula: {
    fontStyle: "italic"
  }
});

class Info extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <label>
              <h4>About</h4>
            </label>
            <p>
              This program calculates your TDEE (total daily energy
              expenditure), the amount of calories recommended to eat in order
              to lose/gain weight, and the macros of where your calories should
              come from based of a chosen diet plan.
            </p>
            <p>
              Your TDEE is the amount of energy which you burn in calories per
              day.
            </p>
            <p>
              For a novice, it is recommended that for gaining weight you don't
              consume more than 20% of your TDEE in calories.
            </p>
            <p>
              There are two formulas used on this app for calculating your TDEE.
              The <b>Mifflin St. Jeor</b> formula and the <b>Katch-McArdle</b>{" "}
              formula. The Katch-McArdle formula is much more accurate and
              requires you to know your body fat percentage. Otherwise you can
              use the Mifflin St. Jeor formula.
            </p>
            <p>
              Basal metabolic rate is the amount of energy expended while
              resting (not performing any activity).
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <label>
              <h4>Activity Levels</h4>
            </label>
            <h6>Sedentary</h6>
            <p className={classes.list}>
              Little or no exercise. Desk job: IT, bank, etc.
            </p>
            <h6>Light Activity</h6>
            <p className={classes.list}>
              Light exercise. Climbing stairs a few times a day.
            </p>
            <h6> Moderate Activity</h6>
            <p className={classes.list}>
              Moderate exercise. Teacher, salesman, etc.
            </p>
            <h6>Very Active</h6>
            <p className={classes.list}>
              Hard exercise. Carpenter, mailman, etc.
            </p>
            <h6>Extremely Active</h6>
            <p className={classes.list}>
              Very hard exercise. Soldier, boxer, etc.
            </p>
          </Paper>
        </Grid>

        <br />

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <label>
              <h4>Mifflin St. Jeor Formula</h4>
            </label>
            <p>
              The Mifflin St. Jeor formula calculates your TDEE by first
              calculating your BMR (basal metabolic rate). There are two
              different formulas depending on your gender.
            </p>
            <p className={classes.formula}>
              Men: 10 x weight (kg) + 6.25 x height (cm) - 5 x Age + 5 <br />
              Women: 10 x weight (kg) + 6.25 x height (cm) - 5 x Age - 161
            </p>
            <p>
              Once your BMR is calculated, the activity level acts as a
              multiplier to the formula to calculate your TDEE.
            </p>
          </Paper>
        </Grid>

        <br />

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <label>
              <h4>Katch-McArdle Formula</h4>
            </label>
            <p>
              The Katch-McArdle formula calculates your TDEE by first
              calculating your LBM (lean body mass) and then your BMR (basal
              metabolic rate).
            </p>
            <p className={classes.formula}>
              BMR = 370 + (21.6 x LBM(kg))
              <br />
              LBM = (Weight(kg) x (100-(Body Fat)))/100
            </p>
            <p>
              Once your BMR is calculated, the activity level acts as a
              multiplier to the formula to calculate your TDEE.
            </p>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Info);
