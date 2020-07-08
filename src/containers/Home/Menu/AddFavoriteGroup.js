import React from 'react';
import {post} from '../../../utils/ApiCaller';

export const AddFavoriteGroup = async (id) => {
  try {
    const response = await post(`/favorites/${id}`, {}, {});
    if (response.data.success) {
      return true;
    }
  } catch (ex) {
    return false;
  }
};
export default AddFavoriteGroup;
