import React, { useState } from "react";

function StudentInfo() {
  const [cgpa, setCgpa] = useState(7.5); // starting CGPA

  const increment = () => {
    setCgpa(cgpa + 0.1);
  };

  return (
    <div>
      <h2>Your Name: Shahab Fardden</h2>
      <h3>Your Branch: CSE</h3>
      <h3>Current CGPA: {cgpa.toFixed(2)}</h3>

      <button onClick={increment}>Increase CGPA</button>
    </div>
  );
}

export default StudentInfo;
