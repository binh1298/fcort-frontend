import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';
import userAvt from '../../assets/images/userAvt.png';
import InputField from '../../component/InputField';
import {put, get} from '../../utils/ApiCaller';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import usePersistedState from '../../utils/usePersistedState';
import AvatarUpload from '../../component/AvatarUpload';
export const Welcome = () => {
  const [user, setUser] = usePersistedState(LOCALSTORAGE_TOKEN_NAME);
  const [token, setToken] = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '');
  const [userProfilePic, setUserProfilePic] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [openCropper, setOpenCropper] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const theme = useContext(ThemeContext);
  const userID = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME).sub;
  const styles = {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.inputField,
  };
  const {register, handleSubmit, errors, setError} = useForm();
  const onSubmit = async (data) => {
    //Call the sever
    try {
      const response = await put(
        `/users/${userID}`,
        {
          fullname: data.fullname,
        },
        {}
      );
      if (response.data.success) {
        const res = await get('/auth/refresh');
        setUser(res.data.data.token);
        window.location.reload(false);
      }
    } catch (ex) {
      console.log(ex);
    }
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
      setIsClicked(true);
      setOpenCropper(true);
      setSelectedImage(file);
    }
  };
  return (
    <div className="welcome-content">
      <AvatarUpload
        addGroup={isClicked}
        onClick={() => {
          setIsClicked(false);
        }}
        setUserProfilePic={setUserProfilePic}
        selectedImage={selectedImage}
        setIsClicked={setIsClicked}
      />
      <div className="welcome-form">
        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo-cover">
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
            name="fullname"
            type="text"
            label="Your name"
            errors={errors}
            valid={register({
              required: `Fullname is required.`,
              pattern: {
                value: /^[A-Z]/i,
                message: 'Fullname must not contain special characters.',
              },
            })}
          />
          <input type="submit" className="welcome-button" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Welcome;
