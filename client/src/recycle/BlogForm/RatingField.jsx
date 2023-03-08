import React from "react";
import { Field } from "formik";
import { Rating } from "@mui/material";

const RatingField = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { value } = field;
        const { setFieldValue } = form;

        return (
          <div>
            <label htmlFor={name}>{label}</label>
            <Rating
              name={name}
              value={value}
              onChange={(event, newValue) => {
                setFieldValue(name, newValue);
              }}
              {...rest}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default RatingField;