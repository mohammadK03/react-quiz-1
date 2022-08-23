import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { getCoins } from '../data';
import trade from '../assets/images/trading.jpg'

const Trade = ({tradeCoin}) => {

    const [ coins, setCoins ] = useState(null);
    const [originCoin, setOriginCoin] = useState(null);
    const [destinationCoin, setDestinationCoin] = useState(null);

    useEffect(() => {

        getCoins()
            .then(data => {
                setCoins(data);
                console.log(coins, 'edoij');
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="trade container" id="ConvertBox">
            <div className="row">
                <div className="col-12">
                    <div className="c-card mx-auto">
                        <div className="d-flex flex-row align-center justify-content-between w100">
                            <p className='ms-2'>از:  </p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {
                                        tradeCoin ? 
                                        tradeCoin.pName : 
                                        (
                                            originCoin || 'ارز دیجیتال'
                                        )
                                    }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        coins && 
                                        coins.map((coin, i) => {
                                            return (
                                                <Dropdown.Item href="#/action-1" onClick={() => setOriginCoin(coin.pName)}>{coin.pName}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className="d-flex flex-row align-center justify-content-between w100 mt-3">
                            <p className='ms-2'>به:</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {
                                    destinationCoin || 'ارز دیجیتال'
                                }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        coins && 
                                        coins.map((coin, i) => {
                                            return (
                                                <Dropdown.Item href="#/action-1" onClick={() => setDestinationCoin(coin.pName)}>{coin.pName}</Dropdown.Item>
                                            ) 
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>

                        <div className="details mt-3">
                            {
                                ((originCoin || tradeCoin) && destinationCoin) && 
                                <div className='d-flex flex-row align-items-center d-container'>
                                    <p> تبدیل از ارز</p>
                                    <p className='mx-2'>{ originCoin } </p>
                                    <p>به ارز</p>
                                    <p className='mx-2'>{destinationCoin}</p>
                                </div>
                            }
                        </div>

                        <button className='btn btn-primary mt-4'>تبدیل ارز</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Trade;