import React from 'react';
import classes from './Footer.module.css';
// import logo_singtao from '../../../asset/imgs/logo_singtao.jpg';
import logo_singtao from './../../../asset/imgs/logo_singtao.jpg';
import logo_a1 from './../../../asset/imgs/logo_a1.jpg';
import logo_ccue from './../../../asset/imgs/logo_ccue.jpg';
import logo_dushi from './../../../asset/imgs/logo_dushi.jpg';
import logo_wechat_01 from './../../../asset/imgs/logo_wechat_01.jpg';
import logo_wechat_02 from './../../../asset/imgs/logo_wechat_02.jpg';
import SingClubbanner from './../../../asset/imgs/Sing-Club-banner-1200-120.jpg';
import footerlogo from "./../../../asset/imgs/footer-logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Partner}>
        <Container >
          <Row>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_singtao} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_a1} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_ccue} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_dushi} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_wechat_01} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={2}>
            <NavLink to="https://singtao.ca/"><img src={logo_wechat_02} alt="" /></NavLink>
            </Col>
          </Row>
            
        </Container>

      </div>
      
      <div className={classes.Subscribe}>
        <h2 className={classes.SubscribeText}>訂閱我們的電子快訊</h2>
        <div className={classes.SubscribeText1}>
            <p ><strong>訂閱</strong> 星島旗下集團的電子快訊，每個周一您將會收到：最新特價情報。</p>
            <NavLink to="https://cloud.marketing.ccue.ca/singclub_subscribe" >
              <img src={SingClubbanner} alt=""/>
            </NavLink>
        </div>
      </div>
      <div className={classes.Contact}>
        <div className={classes.Contact1}>
            以上商品及服務優惠由參與商戶提供及負責 ， 所有商品退貨或更換，顧客需自行聯絡有關商戶安排 。
        </div>
        <div className={classes.Contact2}>
            <p>如有任何問題，可電郵至 Service@singclub.ca</p> 
            <p>或致電 1-888-919-2283 / 905-754-1562</p>
            <p>與我們聯絡辦公時間：星期一至五 2pm-6pm(加東) 11am-3pm(加西)</p>
        </div>
      </div>
      <div className={classes.Link}>
      <Container >
        <Row>
        <Col xs={12} md={9}>
        <div className={classes.LinkLeft}>
          <Container >
          <Row>
            <Col>
              <NavLink to="/">
                <img src={footerlogo}  alt="Logo" />
              </NavLink>
            </Col>
                  
            <Col><Link to="/about-us">關於我們</Link></Col>
            <Col><Link to="/terms-and-conditions-of-use/">服務條款</Link></Col>
            <Col><Link to="/privacy-policy/">私隱條例</Link></Col>
            <Col><Link to="/common_questions/">常見問題</Link></Col>
            <Col><Link to="/contact_us/">聯絡我們</Link> </Col>
            
          </Row>
          </Container>


        </div>
        
          

          </Col>
          
          <Col xs={12} md={3}>
            <div className={classes.LinkLeft}>CCUE Chinese Media Inc.</div>
          </Col>
        </Row>
      </Container>
      </div>
      <div></div>
      
    </div>
  )
}
