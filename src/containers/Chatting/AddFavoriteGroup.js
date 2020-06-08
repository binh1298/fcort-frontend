import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import './AddFavoriteGroup.scss';
import Dialog from '../../component/Dialog';
import ThemeContext from '../../contexts/ThemeContext';
import InputField from '../../component/InputField';
import DialogButton from '../../component/DialogButton';
import {post} from '../../utils/ApiCaller';
import LocalStorageUtils from '../../utils/LocalStorageUtils';

export const AddFavoriteGroup = (props) => {
  const theme = useContext(ThemeContext);
  const [isFocused, setIsFocused] = useState(false);
  const {register, handleSubmit, errors, setError} = useForm();
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.groupDialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.groupDialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.groupDialog.buttonColor,
    backgroundColor: theme.palette.groupDialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.groupDialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.groupDialog.inputBorderFocus,
  };
  const stylesConfictNameError = {
    color: theme.palette.text.error,
    textAlign: 'center',
  };
  const onSubmit = async (data) => {
    //Call the server
    try {
      const response = await post(
        '/favorites',
        {
          name: data.groupName,
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
    <Dialog addGroup={props.addFavorite} onClick={props.onClick}>
      <div className="addFavorite__box" style={stylesDialogGroupBox}>
        <p className="addFavorite__title" style={stylesDialogGroupTitle}>
          Add a new favorite
        </p>
        <form
          className={isFocused ? 'inputGroupName focus' : 'inputGroupName'}
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <InputField
            register={register}
            icon={<i className="fa fas fa-star"></i>}
            name="favoriteName"
            type="text"
            label="Favorite Name"
            errors={errors}
            valid={register({
              required: 'Favorite group name is required',
              maxLength: {
                value: 69,
                message: 'Favorite group name must be less than 69 characters',
              },
            })}
          />
        </form>
        <DialogButton styles={stylesDialogGroupButton}>Create</DialogButton>
        <div style={stylesConfictNameError}>
          {Object.keys(errors)[0] === 'favoriteGroupsName' &&
            'This favorite group name is already taken.'}
        </div>
      </div>
    </Dialog>
  );
};

export default AddFavoriteGroup;
