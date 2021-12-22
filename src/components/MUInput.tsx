import { TextField } from '@mui/material';
import { useField, FieldAttributes } from 'formik';
import React from 'react';

type MyRadioProps = { label: string } & FieldAttributes<{}>;

function MUInput({ label, ...props }: MyRadioProps) {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      type='number'
      error={!!errorText}
      helperText={errorText}
      variant='outlined'
      color='secondary'
      margin='none'
      id={props.name}
      label={label}
      {...field}
      sx={{
        width: 265,
      }}
    />
  );
}

export default MUInput;
