import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, FormHelperText, InputBase, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { getError } from "utils";
import styles from "./styles";

const DropDown = ({
  label,
  name,
  control,
  errors,
  startIcon,
  customStyles,
  options,
  rules,
  fullWidth = true,
  className,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const openDropDown = () => setOpen(true);
  const closeDropDown = () => setOpen(false);

  const error = errors && name ? getError(name, errors) : undefined;
  const showError = !!error?.message;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl
          sx={{ ...styles.container, ...customStyles }}
          fullWidth={fullWidth}
          className={className}
        >
          <InputLabel
            shrink
            className="label"
            htmlFor={`input-${name}`}
            sx={styles.label}
          >
            {label}
          </InputLabel>
          <Select
            labelId={`input-${name}`}
            open={open}
            onOpen={openDropDown}
            onClose={closeDropDown}
            sx={styles.select}
            value={field.value}
            onBlur={field.onBlur}
            error={showError}
            fullWidth={fullWidth}
            inputProps={{ "aria-label": `${name}` }}
            input={
              <InputBase startAdornment={startIcon} id={`input-${name}`} />
            }
            MenuProps={{
              PaperProps: {
                sx: styles.paper,
              },
              MenuListProps: {
                sx: styles.menu,
              },
            }}
            IconComponent={() => (
              <Box sx={styles.dropDownIconWrapper} onClick={openDropDown}>
                <ArrowBackIosIcon
                  sx={open ? styles.dropDownIconUp : styles.dropDownIconDown}
                />
              </Box>
            )}
            {...field}
          >
            {options.map(({ label: menuLabel, value, disabled }, index) => (
              <MenuItem
                id={menuLabel}
                sx={styles.menuItem}
                value={value}
                key={index}
                divider={index === options.length - 1 ? false : true}
                disabled={disabled}
              >
                <Box sx={styles.text}>{menuLabel}</Box>
              </MenuItem>
            ))}
          </Select>
          {error && (
            <FormHelperText sx={styles.helperText}>
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
      {...rest}
    />
  );
};

export default DropDown;
