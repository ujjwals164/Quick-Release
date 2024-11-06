import { Form, Formik } from 'formik'
import React from 'react'
import TextField from './TextFeild'
import * as Yup from 'yup';

function signUpForms() {
  
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    
    lastName: Yup.string() 
      .max(15, 'Must be 15 characters or less')
      .required('Required'),

    email: Yup.string()
      .email('Email is invalid')  
      .required('Required'),

    password: Yup.string() 
      .min(6, 'Password must be at least 6 characters') 
      .required('Required'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match') 
      .required('Required'),
  });

  return (
    <div className='flex justify-center'>
      <Formik
        initialValues={{
          firstName: '',  
          lastName: '',    
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={(values) => console.log(values)}
      >
        {formik => (
          <div className='bg-gray-300 mt-16 px-4 py-4 rounded-lg w-80 shadow-md'>
            <h1 className='text-xl font-mono'>Create your Account</h1>
            <Form>
              <TextField label="First Name" name="firstName" type="text" />  
              <TextField label="Last Name" name="lastName" type="text" />    
              <TextField label="Email" name="email" type="email" />           
              <TextField label="Password" name="password" type="password" />  
              <TextField label="Confirm Password" name="confirmPassword" type="password" />
              <button className='bg-blue-700 w-full mt-4 rounded-lg px-2 py-2 text-white font-medium text-[12px] hover:bg-blue-500'>
                Create Your Account
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default signUpForms