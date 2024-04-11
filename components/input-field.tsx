import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export type InputTextFieldProps = {
  name: string;
  label: string;
  control: any;
  multiline?: boolean;
};

export const InputTextField = (props: InputTextFieldProps) => {
  const multiline = props.multiline || false;
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          variant="filled"
          label={props.label}
          id={props.name}
          type="text"
          multiline={multiline}
          minRows={multiline ? 3 : 1}
          maxRows={multiline ? 10 : 1}
          required
          {...field}
        />
      )}
    />
  )
};

export type InputSelectFieldProps = {
  name: string;
  label: string;
  items:{value: string, display: string}[];
  control: any;
};

export const InputSelectField = (props: InputSelectFieldProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          variant="filled"
          select
          label={props.label}
          id={props.name}
          type="text"
          required
          {...field}
        >
          {props.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>
          ))}
        </TextField>
      )}
    />
  )
};