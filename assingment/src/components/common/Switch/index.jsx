import { FormControlLabel, Switch as SwitchBase } from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./styles";

const Switch = ({ name, control, label, customStyles, ...rest }) => {
  return (
    <Controller
      defaultValue={false}
      render={({ field }) => (
        <FormControlLabel
          control={
            <SwitchBase
              sx={styles.switch}
              defaultChecked={field.value}
              onChange={field.onChange}
              checked={field.value}
            />
          }
          sx={{ ...styles.wrapper, ...customStyles }}
          label={label}
        />
      )}
      name={name}
      control={control}
      {...rest}
    />
  );
};
export default Switch;
