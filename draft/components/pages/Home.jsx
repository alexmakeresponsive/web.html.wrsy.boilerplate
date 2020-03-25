import React from 'react';
import ReactDom from 'react-dom';

import Header from '../parts/Header.jsx';
import Footer from '../parts/Footer.jsx';



const  Home = () => (
    <div className="someLib-Class-1  s-grid-top  s-grid-container   s-grid-sm-12">
        {/*<div className="s-grid-row">*/}
        <div className="s-grid-cell">
            <Header />
        </div>
        <div className="s-grid-cell">
            <h1>Home</h1>
            <h2>Home page title</h2>
            <p>Home r3 us text...</p>
        </div>
        <div className="s-grid-cell">
            <Footer />
        </div>
        {/*</div>*/}
    </div>
);


ReactDom.render(
    <div>
        <Home />
    </div>,
    document.getElementById('root')
);
