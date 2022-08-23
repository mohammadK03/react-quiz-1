import { useEffect, useState } from "react";
import { getCoins } from '../data'

const CoinList = ({handleCoinParent}) => {

    const [ coins, setCoins ] = useState(null);
    const [ moreCoins, setMoreCoins ] = useState(false);
    const [ selectedCoin, setSelectedCoin ] = useState(null);

    useEffect(() => {

        getCoins()
            .then(data => {
                setCoins(data);
                console.log(coins, 'edoij');
            })
            .catch(error => console.log(error))

    }, [])

    const handleCoin = (coin) => {
        handleCoinParent(coin);
    }

    return (
        <div className="coin-list container" id="CoinList">
            <p className="mb-3">خرید و فروش ارزهای دیجیتال</p>
            <div className="header">
                <p className="coin-name">نام رمزارز</p>
                <p className="coin-price">قیمت</p>
                <p className="coin-swing">24 ساعت</p>
                <p className="bs-btn-text">
                    خرید و فروش
                </p>
            </div>

            <div className="body">
                {
                    coins && 
                    coins.map((item, i) => {
                        return (
                            <tr 
                            key={i}
                            className={(i >= 5 && !moreCoins) && 'display-none'}
                            onClick={() => handleCoin(item)}
                            >
                                <th className="coin-name-th">
                                    <p> { item.pName } </p>
                                    <p> { item.eName } </p>
                                </th>
                                <th className="coin-price-th">
                                    <p> {item.price} </p>
                                </th>
                                <th className="coin-swing-th">
                                    <p>{ item.swing }%</p>
                                </th>
                                <th className="bs-btn-th">
                                    <div className="bts-btn"> خرید و فروش </div>
                                </th>
                            </tr>
                        )
                    })
                }
                {
                    !moreCoins ?
                    <p className="more-coins" onClick={() => setMoreCoins(true)}>ارز های بیشتر</p> : 
                    <p className="more-coins" onClick={() => setMoreCoins(false)}>ارز های کمتر</p>
                }
            </div>
        </div>
    );
}
 
export default CoinList;