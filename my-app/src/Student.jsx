import React from "react";

function Student({ name, section }) {
  const courseDetails = {
    course: "React Basics",
    topic: "Props and Components"
  };

  // Inner function defined inside the component
  function Info() {
    return (
      <div>
        <h3>Course Information</h3>
        <p><strong>Course:</strong> {courseDetails.course}</p>
        <p><strong>Topic:</strong> {courseDetails.topic}</p>
      </div>
    );
  }

  // Main component's return
  return (
    <div>
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Section:</strong> {section}</p>

      {/* Calling the inner function */}
      <Info />
    </div>
  );
}

export default Student;
