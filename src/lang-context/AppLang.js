import React, { Component } from 'react';
import './AppLang.css';
import Child from './Child';
import LangControls from './LangControls';
import LanguageContext from './LanguageContext';

export default class AppLang extends Component {

  constructor(props){
    super(props);
    this.state = {
      lang: window.navigator.language
    }
  }

  handleSetLang = (lang) => {
    this.setState({
      lang
    })
  }
  
  // Main render method
  render() { 

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    }
    
    return ( 
      <LanguageContext.Provider
        value={contextValue}>
        <div className='AppLang'>      
          <LangControls 
            onSetLang={this.handleSetLang}/>
          <Child />
        </div> 
      </LanguageContext.Provider>
    );

  }
}