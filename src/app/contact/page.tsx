"use client"
import { useState } from 'react';
import Script from 'next/script';
import { FormikValues, useFormik } from 'formik';
import axios from 'axios';
import { schemaContact } from '@/utils/schemas/contact';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const contactHandler = async (values: FormikValues) => {
    setError("");
    setLoading(true);

    try {
      // @ts-ignore
      const captcha = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_KEY
      );

      const res = await axios.post("/api/contact", {
        ...values, captcha,
      });

      if (res.data.ok) {
        setSuccess(res.data.message);
        setLoading(false)
        formik.resetForm();
        setTimeout(() => setSuccess(""), 5000);
        return
      };

    } catch (error: any) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
      setTimeout(() => setError(""), 5000);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: schemaContact, 
    onSubmit: contactHandler,
  });

  return (
    <section className="text-gray-600 ">
      <Script
        id="my-script-captcha"
        src="https://www.google.com/recaptcha/api.js?render=6LeSCLMfAAAAAN-OEtBuJPYjvKCFXclGknjH11O7">
      </Script>

      <div className="container px-8 md:px-12 pb-28 pt-28 md:pt-44 mx-auto flex md:flex-nowrap flex-wrap justify-center lg:max-w-7xl">

        <div className="pt-10 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative order-2 md:order-1 bg-image">
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-xl">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="text-gray-900 leading-relaxed">4100 Ross Street, Okawville, IL</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WORKING HOURS</h2>
              <p className="leading-relaxed">9:00 - 18:00</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:info@constructioninnova.com" className="text-indigo-500 leading-relaxed">info@constructioninnova.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <a href="tel:2512842842" className="leading-relaxed text-indigo-500">251-284-2842</a>
            </div>
          </div>
        </div>

        <form
          className="pb-10 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full sm:max-w-sm md:py-8 mt-8 md:mt-0 order-1 md:order-2"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <h1 className="headings">Contact Us</h1>
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Leave us your message and we will contact you as soon as possible
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="placeholder:text-sm w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && (
              <label htmlFor="name" className="text-sm font-medium text-red-700">{formik.errors.name}</label>
            )}
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="placeholder:text-sm w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <label htmlFor="name" className="text-sm font-medium text-red-700">{formik.errors.phone}</label>
            )}
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="placeholder:text-sm w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <label htmlFor="name" className="text-sm font-medium text-red-700">{formik.errors.email}</label>
            )}
          </div>

          <div className="relative mb-4">
            <label htmlFor="message"
              className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="placeholder:text-sm w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={formik.values.message}
              onChange={formik.handleChange}>
            </textarea>
            {formik.touched.message && formik.errors.message && (
              <label htmlFor="name" className="text-sm font-medium text-red-700">{formik.errors.message}</label>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:cursor-pointer rounded text-lg">
            {loading ? "Sending..." : "Send"}
          </button>

          {
            error && (
              <div id="container-alert-error" className="bg-red-100 p-2 w-full py-4 text-md rounded">
                <div className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-red-500 h-4 w-4">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
                  </svg>
                  <div className="leading-tight flex flex-col space-y-2">
                    <div className="text-sm font-medium text-red-700">{error}</div>
                    <div id="errorMessage" className="flex-1 leading-snug text-sm text-red-600"></div>
                  </div>
                </div>
              </div>
            )
          }

          {
            success && (
              <div id="container-alert-success" className="bg-green-100 p-5 w-full rounded">
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
                    <div id="successMessage" className="flex-1 leading-tight text-sm text-green-700 font-medium">{success}</div>
                  </div>
                </div>
              </div>
            )
          }
        </form>
      </div>
    </section>
  )
}
