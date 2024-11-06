import { ErrorMessage, useField } from 'formik';
import React from 'react';

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

//   label: The label text for the input field, passed as a prop.
// ...props: The rest of the properties (e.g., name, type, placeholder) that are passed to the TextField component. These are forwarded to the input field.
// useField(props): This hook takes the input field’s name (and optionally other properties like type) from props, and returns two things:
// field: Contains field-related information like value, name, and onChange/onBlur handlers.
// meta: Contains metadata about the field, such as whether it has been touched (meta.touched) or if there’s an error (meta.error).
  
  return (
    <div className='flex flex-col'>
      <label className="mt-2 text-[13px]" htmlFor={field.name}>{label}</label>
      <input
        className={`form-control py-1 mt-1  text-[13px] ${meta.touched && meta.error ? 'is-invalid' : ''}`}
        {...field} {...props}
        autoComplete='off'
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextField;
