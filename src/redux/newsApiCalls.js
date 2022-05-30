import { publicRequestNews } from "../requestMethods";
import {
    getNewsStart,
    getNewsSuccess,
    getNewsFailure,
} from "./newsReducer";

export const getNews = async (dispatch, newsCategory, count) =>{
    dispatch(getNewsStart());
    try {
        const res = await publicRequestNews.get(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        // console.log(res.data);
        dispatch(getNewsSuccess(res.data))
    } catch (err) {
        dispatch(getNewsFailure());
    }
}