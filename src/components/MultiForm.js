import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Form from "react-bootstrap/Form";

function MultiForm() {
  const [validated, setValidated] = useState(false);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Step3 formData={formData} setFormData={setFormData} />;
    }
  };

  const handleBack = (event) => {
    alert("back fire");
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    setPage((currPage) => currPage - 1);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity() === false) {
    } else {
      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        alert("increment");
        setPage((currPage) => currPage + 1);
      }
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button disabled={page == 0} onClick={handleBack}>
              Prev...
            </button>
            <button type="submit">
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}

// onClick={() => {
//     if (page === FormTitles.length - 1) {
//       alert("FORM SUBMITTED");
//       console.log(formData);
//     } else {
//       setPage((currPage) => currPage + 1);
//     }
//   }}
export default MultiForm;
