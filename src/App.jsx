import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);

  const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/';
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const createNewUser = (data) => {
    const URL = 'https://users-crud.academlo.tech/users/';
    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        toast.success('User create Succesfully');
      })
      .catch((err) => {
        console.log(err);
        // toast.error('User create Failed');
        toast.error("This didn't work.")
      });
  };

  const deleteUserById = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then(() => {
        getAllUsers();
        toast.success('User Delete Succesfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('User Delete Failed');
      });
  };

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(URL, data)
      .then((res) => {
        getAllUsers();
        toast.success('User Update Succesfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('User Update Failed');
      });
  };

  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-title">Users</h1>
        <button onClick={() => setCloseForm(false)} className="App-btn">
          <i class="fa-solid fa-plus"></i> Open Form
        </button>
      </div>
      <div className={`form-container ${closeForm && 'form-close'}`}>
        <UsersForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className="users-container">
        {users?.map((user) => (
          <UsersList
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
