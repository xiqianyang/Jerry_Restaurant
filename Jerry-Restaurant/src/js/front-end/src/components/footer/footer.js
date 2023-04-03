import React from 'react';
import { Link } from 'react-router-dom';
import style from "./footer.module.css";
import { HomeOutlined,AccountBookOutlined ,MenuOutlined ,UserOutlined} from '@ant-design/icons';

function Footer() {

  return (
    <div className={style.all}>
    <div  className={style.footer}>
      <Link to="/SpecialOffer">
        <div className={style.main}><AccountBookOutlined   className={style.Ho}/></div>
      </Link>
      <Link to="/Main" >
       
        <div className={style.member}><HomeOutlined  className={style.Ho}/></div>
      </Link>
      <Link to="/HistoryOrder" >
       
        <div className={style.order}><MenuOutlined  className={style.Ho}/></div>
      </Link>
      <Link to="/Account" >
        <div className={style.mine}><UserOutlined  className={style.Ho}/></div>
      </Link>
    </div>
    </div>
  )
}
export default Footer;