import React from "react";
import Form from "./Form";
import Form2 from "./Form2";
import { Switch, Paper, Grid, withStyles } from "@material-ui/core/";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: 240
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  renderForm() {
    if (this.state.checkedA === false) {
      return <Form />;
    } else if (this.state.checkedA === true) {
      return <Form2 />;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12} align="center">
          <Paper className={classes.paper}>
            <label>Mifflin St. Jeor Formula</label>
            <Switch
              checked={this.state.checkedA}
              onClick={this.handleChange("checkedA")}
              color="default"
            />
            <label>Katch-McArdle Formula</label>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {this.renderForm()}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MainForm);
