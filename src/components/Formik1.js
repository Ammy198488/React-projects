//import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const Formik1 = () => {
  const formik = useFormik({
		initialValues: {
			fullName: "",
			phone: "",
			email: "",
			password: "",
			terms: "",
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.required("This field is required"),
			phone: Yup.string()
				.required("Please enter a phone"),
			email: Yup.string()
				.required("This field is required"),
			password: Yup.string()
				.required("This field is required"),
			terms: Yup.string()
				.required("This field is required"),
		}),
		onSubmit: async (values) => {
			console.log(values)
		},
		enableReinitialize: true
	});
  return (
    <div className="card">
      <div className="card-header">
        <h1>Using Formik Part 1</h1>
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          	<div className="mb-3">
				<label htmlFor="fullName" className="form-label" />
					  <input className="form-control"
						  name='fullName'
					type="text"
					placeholder="Enter full name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.fullName}/>
          	</div>
          	<div className="mb-3">
				<label htmlFor="phone" className="form-label" />
					  <input className="form-control"
						  name='phone'
					type="telephone"
					placeholder="Enter number"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.phone}/>
          	</div>
          	<div className="mb-3">
				<label htmlFor="email" className="form-label" />
					  <input className="form-control"
						  name='email'
					type="email"
					placeholder="Enter email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}/>
          	</div>
          	<div className="mb-3">
				<label htmlFor="password" className="form-label" />
					  <input className="form-control"
						  name='password'
					type="password"
					placeholder="Enter password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}/>
			</div>
          	<div className="mb-3">
				<label htmlFor="terms" className="form-label" />
					  <input className="form-control"
						  name='terms'
					type="checkbox"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.terms}/>
			</div>
			<div>
				<button type='submit'>Save</button>
			</div>
        </form>
      </div>
    </div>
  )
}

export default Formik1
