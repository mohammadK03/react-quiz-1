let coins = [
    {
        pName: 'بیت کوین',
        eName: 'Bitcoin',
        price: '646,318,788',
        swing: '1.22'
    },
    {
        pName: 'اتریوم',
        eName: 'Ethereum',
        price: '50,010,665',
        swing: '4.33'
    },
    {
        pName: 'تتر',
        eName: 'Tether',
        price: '29,700',
        swing: '-0.01'
    },
    {
        pName: 'ریپل',
        eName: 'Ripple',
        price: '10,486',
        swing: '1.88'
    },
    {
        pName: 'ترون',
        eName: 'Tron',
        price: '2,002',
        swing: '1.31'
    },
    {
        pName: 'لایت کوین',
        eName: 'Litecoin',
        price: '1,753,385',
        swing: '1.63'
    },
    {
        pName: 'بایننس کوین',
        eName: 'Binance Coin',
        price: '9,042,178',
        swing: '0.96'
    },
    {
        pName: 'کاردانو',
        eName: 'Cardano',
        price: '14,004',
        swing: '2.69'
    },
    {
        pName: 'دج',
        eName: 'Doge',
        price: '2,078',
        swing: '3.3'
    },
    {
        pName: 'دوج ایلان ماسک',
        eName: 'Dogelon Mars',
        price: '0.00947',
        swing: '2.74'
    },
];

const getCoins = () => Promise.resolve(Object.values(coins));

export { getCoins };