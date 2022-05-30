import "./cryptoCard.css";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCoins} from "../../redux/coinsApiCalls";
import {
    Storefront,
} from "@material-ui/icons";
import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCard = ({simplified}) => {
    const count = simplified ? 9 : 100;
    const dispatch = useDispatch();
    const coins = useSelector((state) => state.coin.coins);

    useEffect(() => {
        getCoins(dispatch, count);
    }, [dispatch]);

    return (
        <div>
            <div className="cryptoCardsHeader">
                <h1 className="pad-20">Top 10 Crypto In The World</h1>
                <Link to={"/cryptocurrency"}>
                    <p className="pr-20">Show More</p>
                </Link>
            </div>

            <div className="cryptoCards">
                {coins.map((coin)=>
                    <div className="cryptoCardsItem" key={coin.uuid}>
                            <div>
                                <span className="cryptoCardsTitle">{`${coin.rank}. ${coin.name}`}</span>

                                <img className="float-right img-style" src={
                                    coin.iconUrl
                                        ? coin.iconUrl
                                        :<Storefront className="sidebarIcon" />
                                } alt="img"/>
                            </div>
                            <hr/>
                            <div className="cryptoCardsMoneyContainer">
                                <p className="cryptoCardsMoney">Price: {coin.price}</p>
                                <p className="cryptoCardsMoney">Market Cap: {coin.marketCap}</p>
                                <p className="cryptoCardsMoney">Daily Change: {coin.change}%</p>
                            </div>
                        </div>
                )}
            </div>
        </div>
       );
}
export default CryptoCard;
