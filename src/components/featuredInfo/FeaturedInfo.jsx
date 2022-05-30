import "./featuredInfo.css";
import { useEffect, useState } from "react";
import millify from "millify";
import {useSelector, useDispatch} from "react-redux";
import {getCoins} from "../../redux/coinsApiCalls";

export default function FeaturedInfo() {
    const dispatch = useDispatch();
    const stats = useSelector((state) => state.coin.stats);

    useEffect(() => {
        getCoins(dispatch);
    }, [dispatch]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Cryptocurrencies</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.total}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Market Cap</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.totalMarketCap}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Exchanges</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{stats.totalExchanges}</span>
        </div>
      </div>

        <div className="featuredItem">
            <span className="featuredTitle">Total 24h Volume</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{stats.total24hVolume}</span>
            </div>
        </div>


        <div className="featuredItem">
            <span className="featuredTitle">Total Coins</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{stats.totalCoins}</span>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Total Markets</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{stats.totalMarkets}</span>
            </div>
        </div>

    </div>
  );
}
