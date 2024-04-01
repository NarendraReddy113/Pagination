import React, { useState } from 'react';
import './pagination.css'; // Import your CSS file for styling

const StudentTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 2;

  // Logic to calculate pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = data.slice(indexOfFirstStudent, indexOfLastStudent);

  // Logic to handle page navigation
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Physics</th>
            <th>Maths</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.physics}</td>
              <td>{student.maths}</td>
              <td>{student.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${indexOfFirstStudent + 1} - ${Math.min(indexOfLastStudent, data.length)} of ${data.length}`}</span>
        <button onClick={nextPage} disabled={indexOfLastStudent >= data.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
