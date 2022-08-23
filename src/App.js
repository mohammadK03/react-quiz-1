import { useState } from 'react';
import Banner from './components/Banner';
import CoinList from './components/CoinList';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Trade from './components/Trade';

function App() {

  const [ tCoin, setTCoin ] = useState(null);

  const coin = (value) => {
    setTCoin(value);
  }

  return (
    <div className="App" dir="rtl">
      <Nav />
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <Banner/>
        <CoinList handleCoinParent={coin}/>
        <Trade tradeCoin={tCoin}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
