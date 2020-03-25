import React from 'react';
import ReactDom from 'react-dom';

import Header from '../parts/Header.jsx';
import Footer from '../parts/Footer.jsx'


var Grid = require('react-bootstrap/lib/Grid');
var Row  = require('react-bootstrap/lib/Row');
var Col  = require('react-bootstrap/lib/Col');



const  About = () => (
    <div className="someLib-Class-1">
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <Header />
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <h1>About</h1>
                <h2>About page title</h2>
                <p>About us text...</p>
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <Footer />
            </Col>
        </Row>
    </Grid>
    </div>
);


ReactDom.render(
    <div>
        <About />
    </div>,
    document.getElementById('root')
);
