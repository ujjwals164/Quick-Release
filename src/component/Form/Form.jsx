import React from 'react'
import { Field, Formik } from 'formik'
function Form() {
  return (
    
    <Formik
    onSubmit={(formData) => {
      console.log(formData);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
          <label>First name</label>
          <Field id="firstname" placeholder="firstname" name="firstname"/>

          <label>Last name</label>
          <Field id="lastname" placeholder="lastname" name="lastname"/>

          <label>Email</label>
          <Field id="email" placeholder="email" name="email"/>

          <label>Password</label>
          <Field id="passowrd" placeholder="passowrd" name="password"/>

          <label>Confirm Password</label>
          <Field id="confirmPassword" placeholder="Confirm Password" name="Confirm Password"/>
      </Form>
    )}
  </Formik>
            
    
  )
}

export default Form