// src/components/UserTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';

// ...


const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    
    // Fetch users from backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users/allUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);
    

    // Handle row click to show the modal
    const handleRowClick = (user) => {
        setSelectedUser(user);
        // Open the modal (you can do this with Bootstrap's vanilla JS or jQuery if included)
        // If using Bootstrap 5 (vanilla JS):
        $('#userModal').modal('show');

        const modalElement = document.getElementById('userModal');
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
    };

    return (
        <div className="container mt-5">
            <h3 className="mb-4">Registered Users</h3>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} onClick={() => handleRowClick(user)}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for displaying user details */}
            <div
                className="modal fade"
                id="userModal"
                tabIndex="-1"
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">
                                User Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {selectedUser ? (
                                <>
                                    <p>
                                        <strong>Name:</strong> {selectedUser.name}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {selectedUser.email}
                                    </p>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
