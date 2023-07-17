import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './UsersForm.css';

const UsersForm = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setCloseForm,
}) => {
  console.log(updateInfo);

  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
  };

  return (
    <form className="form " onSubmit={handleSubmit(submit)}>
      <div onClick={() => setCloseForm(true)} className="form-x">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
      </div>
      <h2 className="form-title">
        {updateInfo ? 'Update User' : 'Create New User'}
      </h2>
      <div className="form-div">
        <label className="form-label" htmlFor="email">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input
          placeholder="Email"
          className="form-input"
          type="email"
          id="email"
          {...register('email')}
        />
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="password">
          <i className="fa-solid fa-key"></i>
        </label>
        <input
          placeholder="Password"
          className="form-input"
          type="password"
          id="password"
          {...register('password')}
        />
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="first_name">
          <i className="fa-solid fa-user"></i>
        </label>
        <input
          placeholder="First Name"
          className="form-input"
          type="text"
          id="first_name"
          {...register('first_name')}
        />
        <label className="form-label" htmlFor="last_name"></label>
        <input
          placeholder="Last Name"
          className="form-input"
          type="text"
          id="last_name"
          {...register('last_name')}
        />
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="birthday">
          <i className="fa-solid fa-cake-candles"></i>
        </label>
        <input
          className="form-input"
          type="date"
          id="birthday"
          {...register('birthday')}
        />
      </div>
      <button className="form-btn">Submit</button>
    </form>
  );
};

export default UsersForm;
