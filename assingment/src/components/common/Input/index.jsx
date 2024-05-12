import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { getError } from "utils";
import { number, specialCharacter, text } from "utils/inputTypes";
import styles from "./styles";

const Input = ({
  name,
  control,
  startIcon,
  label,
  type = "text",
  fullWidth = true,
  errors,
  rules,
  customStyles,
  maxLength,
  inputProps,
  variant = "standard",
  className,
  ...rest
}) => {
  const error = getError(name, errors);

  const handleKeyDown = (e) => {
    let invalidChars = [];
    switch (type) {
      case "number":
        invalidChars = number;
        break;
      case "textOnly":
        invalidChars = [...text, ...specialCharacter];
        break;
      default:
        break;
    }

    if (invalidChars.length && invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          sx={{ ...styles.wrapper, ...customStyles }}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
        >
          <InputLabel shrink className="label" htmlFor={`input-${name}`}>
            {label}
          </InputLabel>
          <InputBase
            id={`input-${name}`}
            startAdornment={startIcon}
            type={type === "textOnly" ? "text" : type}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            onBlur={field.onBlur}
            inputProps={{
              maxLength: maxLength,
              ...inputProps,
            }}
            autoComplete="new-password"
            onKeyDown={handleKeyDown}
            error={!!error}
            {...rest}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};
export default Input;
