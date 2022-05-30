import "./newsCard.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { getNews } from "../../redux/newsApiCalls";

const NewsCard = ({simplified}) => {
    const count = simplified ? 6 : 12
    // const newsCategory = "Cryptocurrency"

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.newsList);
    const coins = useSelector((state) => state.coin.coins);

    console.log(news)

    useEffect(() =>{
        getNews(dispatch, newsCategory, count)
    }, [newsCategory, dispatch])

    return (
        <>
            <div>
                <div className="pad-20">
                    <select
                        name="cars"
                        onChange={(e) => setNewsCategory(e.target.value)}
                        className="select-option">
                        <option>Filter By Coin</option>
                        {
                            coins.map((coin)=>
                                <option value={coin.name}>{coin.name}</option>
                            )
                        }
                    </select>
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
                                        {
                                            nw.description > 100
                                                ?
                                                `${nw.description.substring(0, 100)}...`
                                                :
                                                nw.description
                                        }
                                    </p>
                                </div>

                                <div className="newsCardsHeader">
                                    <div>
                                        <h1 className="newsCardsTitle">
                                            <img src="jfjfjf" alt="jd" />
                                            Btc Route</h1>
                                    </div>
                                    <div>
                                        <p>7 hours ago</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}
export default NewsCard;
