import React, { Component } from 'react';
import './AppLang.css';
import Child from './Child';
import LangControls from './LangControls';

export default class AppLang extends Component {

  // Main 
  render() { 
    
    return ( 
      <div className='AppLang'>      
        <LangControls />
        <Child />
      </div> 
    );

  }
}