import './App.css';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Homepage,Cryptocurrencies,CryptoDetails,News} from "./components"
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'> 
            <Routes>
              <Route exact path='/' element={<Homepage/>}/>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            Copy site<br/>
            by  <a href='https://twitter.com/' target="_blank" rel="noreferrer" style={{color:"#A5C9CA"}}>Twitter</a>
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;