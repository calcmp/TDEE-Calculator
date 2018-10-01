import React from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Radio,
  Input,
  InputAdornment,
  FormHelperText,
  Button,
  Grid,
  withStyles
} from "@material-ui/core/";
import classNames from "classnames";

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
    marginTop: 20,
    margin: theme.spacing.unit * 1,
    flexBasis: 200
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //input array
      input: [
        {
          type: "number",
          name: "weight",
          id: "weight",
          value: ""
        },
        {
          type: "number",
          name: "height",
          id: "height",
          value: ""
        },
        {
          type: "number",
          name: "age",
          id: "age",
          value: ""
        },
        {
          type: "number",
          name: "tempWeight",
          id: "tempWeight",
          value: ""
        }
      ],
      //activity dropdown option array
      activityOptions: [
        {
          id: "1",
          value: 1.1,
          text: "Sedentary"
        },
        {
          id: "2",
          value: 1.2,
          text: "Light Activity"
        },
        {
          id: "3",
          value: 1.35,
          text: "Moderate Activity"
        },
        {
          id: "4",
          value: 1.45,
          text: "Very Active"
        },
        {
          id: "5",
          value: 1.6,
          text: "Extremely Active"
        }
      ],
      //surplus dropdown option array
      surplusOptions: [
        {
          id: "1",
          value: 0.1,
          label: "10%"
        },
        {
          id: "2",
          value: 0.15,
          label: "15%"
        },
        {
          id: "3",
          value: 0.2,
          label: "20%"
        }
      ],
      //macro dropdown option array
      macroOptions: [
        {
          id: "1",
          value: 1,
          label: "Ketogenic"
        },
        {
          id: "2",
          value: 2,
          label: "Low Carb"
        },
        {
          id: "3",
          value: 3,
          label: "Low Fat"
        },
        {
          id: "4",
          value: 4,
          label: "Balanced"
        },
        {
          id: "5",
          value: 5,
          label: "High Protein"
        },
        {
          id: "6",
          value: 6,
          label: "High Carb"
        }
      ],
      //data array
      data: [
        { name: "BMR", value: 0 },
        { name: "LBM", value: 0 },
        { name: "TDEE", value: 0 },
        { name: "calories", value: 0 },
        { name: "tempCarbs", value: 0 },
        { name: "tempProtein", value: 0 },
        { name: "tempFat", value: 0 },
        { name: "carbs", value: 0 },
        { name: "protein", value: 0 },
        { name: "fat", value: 0 }
      ],
      weightOption: "gain",
      genderOption: "male",
      weightValue: "kg"
    };
    //set default values
    this.state.activity = "";
    this.state.surplus = "";
    this.state.macro = "";

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    let input = this.state.input.slice();
    for (let i in input) {
      if (input[i].name === e.target.name) {
        input[i].value = e.target.value;
        this.setState({ input });
        break;
      }
    }
  }
  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    console.log("");

    //set values
    let input = this.state.input.slice();
    let data = this.state.data.slice();
    let macro = this.state.macro;

    //if weight is in lbs then convert to KG
    if (this.state.weightValue === "kg") {
      let tempValue = this.state.input[0].value;
      input[3].value = tempValue;
      this.setState({ input });
    } else if (this.state.weightValue === "lb") {
      let tempValue = this.state.input[0].value * 0.45359237001;
      input[3].value = tempValue;
      this.setState({ input });
    }

    //calculate BMR male
    if (this.state.genderOption === "male") {
      data[0].value =
        9.99 * this.state.input[3].value +
        6.25 * this.state.input[1].value -
        4.92 * this.state.input[2].value +
        5;
      this.setState({ data });
    } else if (this.state.genderOption === "female") {
      //calculate BMR female
      data[0].value =
        9.99 * this.state.input[3].value +
        6.25 * this.state.input[1].value -
        4.92 * this.state.input[2].value -
        161;
      this.setState({ data });
    }

    //calculate TDEE
    data[2].value = this.state.data[0].value * this.state.activity;
    this.setState({ data });

    //calculate calorie surplus
    if (this.state.weightOption === "gain") {
      let tempResult = this.state.data[2].value * this.state.surplus;
      data[3].value = tempResult + this.state.data[2].value;
      this.setState({ data });
    } else if (this.state.weightOption === "lose") {
      let tempResult = this.state.data[2].value * this.state.surplus;
      data[3].value = this.state.data[2].value - tempResult;
      this.setState({ data });
    }

    //calculate macro values
    if (macro === 1) {
      //ketogenic
      data[4].value = this.state.data[3].value * 0.05;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.65;
      this.setState({ data });
    } else if (macro === 2) {
      //low carb
      data[4].value = this.state.data[3].value * 0.2;
      data[5].value = this.state.data[3].value * 0.35;
      data[6].value = this.state.data[3].value * 0.45;
      this.setState({ data });
    } else if (macro === 3) {
      //low fat
      data[4].value = this.state.data[3].value * 0.5;
      data[5].value = this.state.data[3].value * 0.35;
      data[6].value = this.state.data[3].value * 0.15;
      this.setState({ data });
    } else if (macro === 4) {
      //balanced
      data[4].value = this.state.data[3].value * 0.35;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.35;
      this.setState({ data });
    } else if (macro === 5) {
      //high protein
      data[4].value = this.state.data[3].value * 0.3;
      data[5].value = this.state.data[3].value * 0.45;
      data[6].value = this.state.data[3].value * 0.25;
      this.setState({ data });
    } else if (macro === 6) {
      //high carb
      data[4].value = this.state.data[3].value * 0.5;
      data[5].value = this.state.data[3].value * 0.3;
      data[6].value = this.state.data[3].value * 0.2;
      this.setState({ data });
    }
    //calculate macro values
    data[7].value = this.state.data[4].value / 4;
    data[8].value = this.state.data[5].value / 4;
    data[9].value = this.state.data[6].value / 9;
    this.setState({ data });
  }

  //render surplus/defecit method
  renderSurDef() {
    if (this.state.weightOption === "gain") {
      return "Surplus";
    } else if (this.state.weightOption === "lose") {
      return "Defecit";
    }
  }

  renderWeight() {
    if (this.state.weightValue === "kg") {
      return (
        <Input
          placeholder="70"
          type="number"
          id="adornment-weight"
          name="weight"
          onChange={this.handleInputChange.bind(this)}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          inputProps={{
            "aria-label": "Weight"
          }}
        />
      );
    } else if (this.state.weightValue === "lb") {
      return (
        <Input
          placeholder="180"
          type="number"
          id="adornment-weight"
          name="weight"
          onChange={this.handleInputChange.bind(this)}
          endAdornment={<InputAdornment position="end">lb</InputAdornment>}
          inputProps={{
            "aria-label": "Weight"
          }}
        />
      );
    }
  }

  render() {
    let id = 0;
    function createData(TDEE, calories, carbs, protein, fat) {
      id += 1;
      return { id, TDEE, calories, carbs, protein, fat };
    }
    const rows = [
      createData(
        this.state.data[2].value.toFixed(0),
        this.state.data[3].value.toFixed(0),
        this.state.data[7].value.toFixed(0),
        this.state.data[8].value.toFixed(0),
        this.state.data[9].value.toFixed(0)
      )
    ];
    const { classes } = this.props;

    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <label>Gender: </label>
            <br />
            <label style={{ cursor: "pointer" }}>
              <Radio
                checked={this.state.genderOption === "male"}
                onChange={e => this.handleChange(e, "genderOption")}
                value="male"
                color="default"
              />
              Male
            </label>
            <label style={{ cursor: "pointer" }}>
              <Radio
                checked={this.state.genderOption === "female"}
                onChange={e => this.handleChange(e, "genderOption")}
                value="female"
                color="default"
              />
              Female
            </label>

            <br />

            <label>Weight Unit: </label>
            <br />
            <label style={{ cursor: "pointer" }}>
              <Radio
                checked={this.state.weightValue === "kg"}
                onChange={e => this.handleChange(e, "weightValue")}
                value="kg"
                color="default"
              />
              Kg
            </label>
            <label style={{ cursor: "pointer" }}>
              <Radio
                checked={this.state.weightValue === "lb"}
                onChange={e => this.handleChange(e, "weightValue")}
                value="lb"
                color="default"
              />
              lb
            </label>

            <br />

            <label>Weight Goal: </label>
            <br />
            <label style={{ cursor: "pointer" }}>
              <Radio
                color="default"
                checked={this.state.weightOption === "gain"}
                onChange={e => this.handleChange(e, "weightOption")}
                value="gain"
              />
              Gain
            </label>
            <label style={{ cursor: "pointer" }}>
              <Radio
                color="default"
                checked={this.state.weightOption === "lose"}
                onChange={e => this.handleChange(e, "weightOption")}
                value="lose"
              />
              Lose
            </label>
          </Paper>
        </Grid>

        <br />

        <Grid item xs={12} sm={6} align="center">
          <Paper className={classes.paper}>
            <FormControl
              className={classNames(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
              aria-describedby="weight-helper-text"
            >
              {this.renderWeight()}
              <FormHelperText id="weight-helper-text">Weight</FormHelperText>
            </FormControl>

            <br />

            <FormControl
              className={classNames(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
              aria-describedby="height-helper-text"
            >
              <Input
                placeholder="175"
                type="number"
                id="adornment-height"
                name="height"
                value={this.state.input[1].value}
                onChange={this.handleInputChange.bind(this)}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
                inputProps={{
                  "aria-label": "Height"
                }}
              />
              <FormHelperText id="weight-helper-text">Height</FormHelperText>
            </FormControl>

            <br />

            <FormControl
              style={{ marginBottom: "26px" }}
              className={classNames(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
              aria-describedby="age-helper-text"
            >
              <Input
                placeholder="21"
                type="number"
                id="adornment-age"
                name="age"
                value={this.state.input[2].value}
                onChange={this.handleInputChange.bind(this)}
                endAdornment={
                  <InputAdornment position="end">yrs</InputAdornment>
                }
                inputProps={{
                  "aria-label": "Age"
                }}
              />
              <FormHelperText id="weight-helper-text">Age</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>

        <br />

        <Grid item xs={12} align="center">
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel>Activity Level</InputLabel>
              <Select
                value={this.state.activity}
                onChange={e => this.handleChange(e, "activity")}
              >
                {this.state.activityOptions.map(c => (
                  <MenuItem key={c.id} value={c.value}>
                    {" "}
                    {c.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>{this.renderSurDef()}</InputLabel>
              <Select
                value={this.state.surplus}
                onChange={e => this.handleChange(e, "surplus")}
              >
                {this.state.surplusOptions.map(c => (
                  <MenuItem key={c.id} value={c.value}>
                    {" "}
                    {c.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>Diet</InputLabel>
              <Select
                value={this.state.macro}
                onChange={e => this.handleChange(e, "macro")}
              >
                {this.state.macroOptions.map(c => (
                  <MenuItem key={c.id} value={c.value}>
                    {" "}
                    {c.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <br />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => this.handleFormSubmit(e)}
              className="btn btn-primary btn-sm m-2"
            >
              Submit
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} align="center">
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell numeric>TDEE</TableCell>
                  <TableCell numeric>Calories</TableCell>
                  <TableCell numeric>Carbs (g)</TableCell>
                  <TableCell numeric>Protein (g)</TableCell>
                  <TableCell numeric>Fat (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell numeric>{row.TDEE}</TableCell>
                      <TableCell numeric>{row.calories}</TableCell>
                      <TableCell numeric>{row.carbs}</TableCell>
                      <TableCell numeric>{row.protein}</TableCell>
                      <TableCell numeric>{row.fat}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Form);
