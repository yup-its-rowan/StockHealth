import React, {useState} from 'react';
import './Home.css';




const Home = () =>{

    const [AAPL, setAAPL] = useState(0);

    const apiKey = process.env.REACT_APP_TD_API_KEY;
    fetch('https://api.tdameritrade.com/v1/marketdata/NVDA/quotes?apikey=' + apiKey)
   .then(response => response.json())
   .then(data => console.log(data));

    return(
    <div className = 'page'>
        <div className = 'trendingStocks'>
            <h2 className = 'trendingStocksTitle'>
                Trending Stocks + {AAPL}
            </h2>
        </div>
    </div>
    );
}

export default Home;