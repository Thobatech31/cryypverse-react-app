import "./newsCard.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getNews } from "../../redux/newsApiCalls";
import {Link} from "react-router-dom";
import moment from "moment";

const NewsCard = ({simplified}) => {
    const count = simplified ? 6 : 12
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.newsList);


    useEffect(() =>{
        getNews(dispatch, count)
    }, [dispatch])

    return (
        <>
            <div className="newsCardsHeader">
                <h1 className="pad-20">Latest Crypto News</h1>
                <Link to={"/news"}>
                    <p className="pr-20">Show More</p>
                </Link>
            </div>
            <div className="newsCards">
                {news.map((nw,i)=>
                        <div className="newsCardsItem" key={i}>
                            <a href={nw.url} target="_blank">

                            <div className="newsCardsHeader">
                                <div>
                                    <h1 className="newsCardsTitle">{nw?.name}</h1>
                                </div>
                                <div>
                                    <img className="img-sec" src={nw?.image?.thumbnail?.contentUrl} alt="img"/>
                                </div>
                            </div>
                            <div className="newsCardsDescContainer">
                                <p className="newsCardsDesc">
                                    {nw.description > 100
                                    ? `${nw.description.substring(0,60)} ...`
                                        :
                                        nw.description
                                    }
                                </p>
                            </div>
                            <div className="newsCardsHeader">
                                <div>
                                    <h1 className="newsCardsTitle flex-center">
                                        <img src={nw?.provider[0]?.image?.thumbnail?.contentUrl} alt="jd" />
                                        {nw?.provider[0]?.name && `${nw?.provider[0]?.name}`}</h1>
                                </div>
                                <div>
                                    <p>{moment(nw.datePublished).startOf('ss').fromNow()}</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    )}
            </div>
        </>
    );
}
export default NewsCard;
