import "./home.css";
import { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import CryptoCards from "../../components/cryptoCard/CryptoCard";
import LatestNewsCard from "../../components/latestNewsCard/NewsCard"
export default function Home() {

  return (
    <div className="home">
        <FeaturedInfo />
        <CryptoCards simplified />
        <LatestNewsCard simplified/>
    </div>
  );
}
