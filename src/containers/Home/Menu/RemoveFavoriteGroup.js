import React from 'react';
import {remove} from '../../../utils/ApiCaller';

export const RemoveFavoriteGroup = async (id) => {
  try {
    const response = await remove(`/favorites/${id}`, {}, {});
  } catch (ex) {
    console.log(ex);
  }
};
export default RemoveFavoriteGroup;
