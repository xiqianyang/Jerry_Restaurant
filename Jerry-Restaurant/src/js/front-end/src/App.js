import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import Main from "./components/Main/Main";
import Account from "./components/Account/Account";
import Order from "./components/Order/Order";
import React, {useState} from 'react';


const SpecialOffers_DATA = [
  {
      id: '1',
      title: '汉堡包',
      desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
      price: 12,
      img: 'images/1.png'
  },
  {
      id: '2',
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
      price: 20,
      img: 'images/2.png'
  },
  {
      id: '3',
      title: '巨无霸',
      desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
      price: 24,
      img: 'images/3.png'
  }, {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
      price: 21,
      img: 'images/4.png'
  },{
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: 'images/4.png'
},

];


const App = () => {
  const [SpecialOffersData] = useState(SpecialOffers_DATA);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SpecialOffer" element={<SpecialOffer  SpecialOffersData={SpecialOffersData} />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
