import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import './AddFavoriteGroup.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import InputField from '../../../component/InputField';
import DialogButton from '../../../component/DialogButton';
import Dialog from '../../../component/Dialog';
import {post} from '../../../utils/ApiCaller';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import {LOCALSTORAGE_TOKEN_NAME} from '../../../configurations';
const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);

export const AddFavoriteGroup = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const {register, handleSubmit, errors, setError} = useForm();
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.dialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.dialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.dialog.inputBorderFocus,
  };
  const stylesConfictNameError = {
    color: theme.palette.text.error,
    textAlign: 'center',
  };
  const onSubmit = async (data) => {
    //Call the server
    try {
      const response = await post(
        `/favorites/${user.sub}`,
        {
          name: data.favoriteGroupName,
        },
        {}
      );
      if (response.data.success) {
        await props.handleFetch();
        props.onClick();
      }
    } catch (ex) {
      if (ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
      if (ex.response) {
        setError('favoriteGroupsName');
      }
    }
  };
  return (
    <Dialog dialogStatus={props.dialogStatus} onClick={props.onClick}>
      <div className="dialogFavoriteGroupBox" style={stylesDialogGroupBox}>
        <p className="dialogFavoriteGroupTitle" style={stylesDialogGroupTitle}>
          Add a new favorite group
        </p>
        <form
          className={
            isFocused ? 'inputFavoriteGroupName focus' : 'inputFavoriteGroupName'
          }
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <InputField
            register={register}
            icon={<i className="fa fas fa-star"></i>}
            name="favoriteGroupName"
            type="text"
            label="Favorite Group Name"
            errors={errors}
            valid={register({
              required: 'Favorite group name is required',
              maxLength: {
                value: 69,
                message: 'Favorite group name must be less than 69 characters',
              },
            })}
          />
          <DialogButton styles={stylesDialogGroupButton}>Create</DialogButton>
          <div style={stylesConfictNameError}>
            {Object.keys(errors)[0] === 'favoriteGroupsName' &&
              'This favorite group name is already taken.'}
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default AddFavoriteGroup;
