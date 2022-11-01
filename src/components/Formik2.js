import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
const Formik2 = () => {
  return (
      <Formik enableReinitialize={true}
          initialValues={{ name: "", email: "", terms: "true" }}
          onSubmit={(values) => console.log(values)}
          //validationSchema={}
      >
          {(
              {values, errors, handleBlur, handleSubmit, handleChange}
          ) => (
              <form onSubmit={handleSubmit}>
                  <div className='card-header'>
                      <h1>Using Formik</h1>
                  </div>
                  <div className='card-body'>
                       <input type='text' name="name" className="form-control" value={values.name} onChange={handleChange} />
                        <input type='email' name="email" className="form-control" value={values.email} onChange={handleChange} />
                        <input type='checkbox' name="terms" className="form-control" value={values.terms} onChange={handleChange} />
                        <button type='submit'>Save</button>
                  </div>
                 
              </form>
          )}
    </Formik>
  )
}

export default Formik2
