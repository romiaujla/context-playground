import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

class LangControls extends Component {

    static defaultProps = {
        onSetLang: () => {}
    }

    render() { 
        return (
            <LanguageContext.Consumer>
            {(value) => {
                return (
                    <>
                        <button
                            disabled={value.lang === 'en-GB'}
                            onClick={() => this.props.onSetLang('en-GB')}
                        >
                            British{' '}
                            <span role='img' aria-label='en-GB'>🇬🇧</span>
                        </button>
                        {' '}
                        <button
                            disabled={value.lang === 'en-US'}
                            onClick={() => this.props.onSetLang('en-US')}
                        >
                            American{' '}
                            <span role='img' aria-label='en-US'>🇺🇸</span>
                        </button>
                        {' '}
                        <button
                            disabled={value.lang === 'ko'}
                            onClick={() => this.props.onSetLang('ko')}
                        >
                            Korean{' '}
                            <span role='img' aria-label='ko'>🇰🇷</span>
                        </button>
                    </>);
                }
            }
            </LanguageContext.Consumer>
        );
    }
}
 
export default LangControls;