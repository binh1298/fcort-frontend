/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';
import logoFcode from '../../assets/images/logoFcode.png';
import logoFcort from '../../assets/images/logoFcort.png';
import userAvt from '../../assets/images/userAvt.png';
import background from '../../assets/images/backgroundLoginSingup.png';
import InputField from '../../component/InputField';
import {post} from '../../utils/ApiCaller';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import usePersistedState from '../../utils/usePersistedState';
import AvatarUpload from '../../component/AvatarUpload';
export const Welcome = () => {
  const [token, setToken] = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '');
  const [userProfilePic, setUserProfilePic] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [openCropper, setOpenCropper] = useState(false);
  const [isClickedAddGroup, setIsClickedAddGroup] = useState(false);
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.inputField,
  };

  const {register, handleSubmit, errors, setError} = useForm();
  const onSubmit = async (data) => {
    //Call the sever
    try {
      const response = await post(
        '/auth/login',
        {
          email: data.email,
          password: data.password,
        },
        {}
      );
      console.log('login success');
      console.log(response);
      if (response.data.success) {
        setUser(response.data.data.token);
        window.location.reload(false);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        console.log(ex.response.data.data.message);
        setError('username', 'validate');
      }
    }
    console.log('Submitted');
  };
  const profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0] || selectedImage;
    const {type} = file;
    if (
      !(
        type.endsWith('jpeg') ||
        type.endsWith('png') ||
        type.endsWith('jpg') ||
        type.endsWith('gif')
      )
    ) {
    } else {
      setIsClickedAddGroup(true);
      setOpenCropper(true);
      setSelectedImage(file);
    }
  };
  return (
    <div className="welcome-content">
      <AvatarUpload
        addGroup={isClickedAddGroup}
        onClick={() => {
          setIsClickedAddGroup(false);
        }}
        setUserProfilePic={setUserProfilePic}
        selectedImage={selectedImage}
        setIsClickedAddGroup={setIsClickedAddGroup}
      />

      <div className="welcome-form">
        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo-cover">
            {/* <h1>Welcome to Fcort</h1> */}
            <img className="logo-fcode" src={userProfilePic || userAvt} />
            <span>Upload Avt</span>
            <input
              className="fileInput-23-d-3"
              type="file"
              tabIndex="0"
              multiple=""
              accept=".jpg,.jpeg,.png,.gif"
              aria-label="Change Avatar"
              onChange={profilePicChange}
            />
            <i className="fa fa-camera"></i>
          </div>

          <h3 className="title">Your avatar</h3>
          <InputField
            register={register}
            icon={<i className="fa fas fa-user"></i>}
            name="email"
            type="text"
            label="Your name"
            errors={errors}
          />

          <input type="submit" className="welcome-button" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Welcome;
