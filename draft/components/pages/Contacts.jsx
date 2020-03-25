import React from 'react';
import ReactDom from 'react-dom';

import Header from '../parts/Header.jsx';
import Footer from '../parts/Footer.jsx';

const  Contacts = () => (
    <div>
        <Header />
        <div>
            <h1>Contacts</h1>
            <h2>Contacts page title</h2>
        </div>
        <Footer />
    </div>
);


ReactDom.render(
    <div>
        <Contacts />
    </div>,
    document.getElementById('root')
);