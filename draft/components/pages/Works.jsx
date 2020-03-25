import React from 'react';
import ReactDom from 'react-dom';

import Header from '../parts/Header.jsx';
import Footer from '../parts/Footer.jsx';

const  Works = () => (
    <div>
        <Header />
        <div>
            <h1>Works</h1>
            <h2>Works page title</h2>
        </div>
        <Footer />
    </div>
);


ReactDom.render(
    <div>
        <Works />
    </div>,
    document.getElementById('root')
);