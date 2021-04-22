import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDown = (props) => {
  const classes = useStyles();
  const { name, label, value, handleInputChange, options } = props;

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      // {...(errors.category && {
      //   error: true,
      //   helperText: errors.category,
      // })} // for DropDown the error and the error message is in FormControl
    >
      <InputLabel id="input-label">{label}</InputLabel>
      <Select
        labelId="select-input"
        id="category-select-input"
        name={name}
        value={value}
        onChange={handleInputChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((category) => {
          return (
            <MenuItem key={category._id} value={category.category}>
              {category.category}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {/* {errors.category ? errors.category : "Required"} */}
      </FormHelperText>
    </FormControl>
  );
};

export default DropDown;
