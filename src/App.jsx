import { useEffect, useState } from "react";
import Pagination from "./Pagination";


const App = () => {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:5000/student');
        const data = await response.json();
        setStudents(data);
      };
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Student List</h1>
        <Pagination data={students} />
      </div>
    );
  };
  
  export default App;
  