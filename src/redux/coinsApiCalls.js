import { publicRequestCoins } from "../requestMethods";
import {
  getCoinStart,
  getCoinSuccess,
  getCoinFailure,
} from "./coinRedux";


export const getCoins = async (dispatch, count) => {
  dispatch(getCoinStart());
  try {
    const res = await publicRequestCoins.get(`/coins?limit=${count}`);
    // console.log(res.data.data)
    dispatch(getCoinSuccess(res.data.data));
    // Notification.success(res.data.status.msg);
  } catch (err) {
    dispatch(getCoinFailure());
    // Notification.error(err.response.data.msg);
  }
};
