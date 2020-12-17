import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
const data = [
    {
        name: 'MON',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: false
            },
            {
                heading: 'three',
                active: false
            },
            {
                heading: 'four',
                active: false
            },
            {
                heading: 'five',
                active: false
            },
        ]
    },
    {
        name: 'TUE',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: true
            },
            {
                heading: 'three',
                active: true
            },
            {
                heading: 'four',
                active: true
            },
            {
                heading: 'five',
                active: true
            },
        ]
    },
    {
        name: 'WED',
        collection: [
            {
                heading: 'one',
                active: true
            },
            {
                heading: 'two',
                active: true
            },
            {
                heading: 'three',
                active: true
            },
            {
                heading: 'four',
                active: true
            },
            {
                heading: 'five',
                active: true
            },
        ]
    },
    {
        name: 'THU',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: false
            },
            {
                heading: 'three',
                active: false
            },
            {
                heading: 'four',
                active: false
            },
            {
                heading: 'five',
                active: false
            },
        ]
    },
    {
        name: 'FRI',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: true
            },
            {
                heading: 'three',
                active: true
            },
            {
                heading: 'four',
                active: true
            },
            {
                heading: 'five',
                active: true
            },
        ]
    },
    {
        name: 'SAT',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: true
            },
            {
                heading: 'three',
                active: false
            },
            {
                heading: 'four',
                active: false
            },
            {
                heading: 'five',
                active: false
            },
        ]
    },
    {
        name: 'SUN',
        collection: [
            {
                heading: 'one',
                active: false
            },
            {
                heading: 'two',
                active: false
            },
            {
                heading: 'three',
                active: false
            },
            {
                heading: 'four',
                active: false
            },
            {
                heading: 'five',
                active: false
            },
        ]
    }
]

class HomePage extends Component {
    constructor(props) {
        super(props);
        // this.state
    }
    
    render() {
        return (
            <div style={{display: 'flex'}}>
                {data.map((item) => 
                    (<div>
                        {item.name && <span>{item.name}</span>}
                        <div className='boxItemWrapper'>
                            {item.collection.map((boxItem, index) => 
                                (<div
                                    // className={'fullBox'}
                                    className={boxItem.active === true ? 'fullBox' : 'emptyBox'}
                                >
                                </div>)
                            )}
                        </div>
                    </div>)
                )}
                                
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;