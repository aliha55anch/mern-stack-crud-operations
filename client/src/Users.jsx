import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light py-4">
      <div className="card w-75 shadow-sm border-0">
        <div className="card-header bg-white d-flex align-items-center justify-content-between py-3 px-4 border-bottom">
          <h2 className="mb-0 h5 fw-bold">User List</h2>
          <Link to="/create" className="btn btn-success btn-sm">
            Add User
          </Link>
        </div>
        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="fw-semibold">Name</th>
                  <th className="fw-semibold">Email</th>
                  <th className="fw-semibold">Age</th>
                  <th className="fw-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <Link
                            to={`/update/${user._id}`}
                            className="btn btn-primary btn-sm"
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
