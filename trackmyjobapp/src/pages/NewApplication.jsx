import React from "react";
import Sidebar from "../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AddNewApplication from "../services/DataService";

const NewApplication = () => {
  const onApplicationSubmit = async (event) => {
    // const applicationData = {
    //   companyName: event.companyName,
    //   jobRole: event.jobRole,
    //   JobDesc: event.JobDesc,
    //   jobPortal: event.jobPortal,
    //   jobLink: event.jobLink,
    //   refDetails: event.refDetails,
    //   notes: event.notes,
    // };
    const response = await AddNewApplication(event);
    event.preventDefault();
  };

  return (
    <div className="h-screen w-screen flex overflow-x-hidden">
      <div className=" basis-1/6">
        <Sidebar />
      </div>
      <div className="p-12 basis-5/6">
        <Formik
          initialValues={{
            companyName: "",
            jobRole: "",
            JobDesc: "",
            jobPortal: "",
            jobLink: "",
            refDetails: "",
            notes: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              onApplicationSubmit(values);
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form
            className="flex flex-col w-full items-center"
            action="/"
            method="POST"
          >
            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Company Name:</p>
              <Field
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="companyName"
                placeholder="Enter the Company Name"
              />
            </div>

            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Job Role:</p>
              <Field
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="jobRole"
                placeholder="Enter the job Role"
              />
            </div>

            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Job Portal:</p>
              <Field
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="jobPortal"
                placeholder="Enter the job portal name"
              />
            </div>

            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Job Link:</p>
              <Field
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="jobLink"
                placeholder="Paste the Job URL"
              />
            </div>
            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Referral Details:</p>
              <Field
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="refDetails"
                placeholder="Enter the referral details"
              />
            </div>

            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Job Description:</p>
              <Field
                component="textarea"
                rows="6"
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="jobDesc"
                placeholder="Enter job Description"
              />
            </div>

            <div className="w-3/4 my-2">
              <p className="text-8 font-bold">Additional Notes:</p>
              <Field
                component="textarea"
                rows="6"
                className="p-2 my-2 w-full border-solid border-2 border-gray-500 focus:outline-none focus:border-primary rounded-md"
                type="text"
                name="notes"
                placeholder="Enter any Notes here..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white text-[18px] p-3 w-1/4 my-6 rounded-lg"
              onClick={onApplicationSubmit}
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewApplication;
