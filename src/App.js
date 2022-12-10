import { useEffect, useState } from 'react';
import './App.css';
import { FaEllipsisV } from "react-icons/fa";

function App() {
  const [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState('');
  const [serial, setSerial] = useState('');
  useEffect(()=>{
    fetch("MOCK_DATA (1).json")
    .then(res => res.json())
    .then(data=>setData(data));
  },[])
  const handleAscending = () =>{
    const ascending = [...data].sort((a, b) =>
      a.first_name > b.first_name ? 1 : -1
    );
    setData(ascending);
  }
  const handleDescending = () =>{
    const descending = [...data].sort((a, b) =>
      a.first_name > b.first_name ? -1 : 1
    );
    setData(descending);
  }
  const changeBackground = (status,id) =>{
    setIsTrue(status);
    setSerial(id);
  }
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <td>ID</td>
              <td className="flex items-center gap-2">
                First Name
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0}>
                    <FaEllipsisV></FaEllipsisV>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button onClick={handleAscending}>Sort by ASC</button>
                    </li>
                    <li>
                      <button onClick={handleDescending}>Sort by DESC</button>
                    </li>
                  </ul>
                </div>
              </td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>IP Address</td>
              <td>Airport Code</td>
              <td>Time</td>
              <td>Status</td>
              <td>Mobile</td>
              <td>Area</td>
              <td>Show</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {data.map((singleData) => (
              <tr
                key={singleData.id}
                onClick={() =>
                  changeBackground(singleData.status, singleData.id)
                }
              >
                <td>{singleData.id}</td>
                <td>{singleData.first_name}</td>
                <td>{singleData.last_name}</td>
                <td>{singleData.email}</td>
                <td>{singleData.gender}</td>
                <td>{singleData.ip_address}</td>
                <td>{singleData.airport_code}</td>
                <td>{singleData.time}</td>

                <td
                  style={{
                    color:
                      isTrue === "true" && serial === singleData.id && "#fff",
                    color:
                      isTrue === "false" &&
                      serial === singleData.id &&
                      "#545e6f",
                    background:
                      isTrue === "false" &&
                      serial === singleData.id &&
                      "#8f1909",
                    background:
                      isTrue === "true" &&
                      serial === singleData.id &&
                      "#9ED597",
                  }}
                >
                  {" "}
                  <button>{singleData.status}</button>{" "}
                </td>
                <td>{singleData.mobile}</td>
                <td>{singleData.area}</td>
                <td>{singleData.show}</td>
                <td>{singleData.edit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
