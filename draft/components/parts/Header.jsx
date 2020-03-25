import React from 'react';

var Alert = require('react-bootstrap/lib/Alert');
var Button = require('react-bootstrap/lib/Button');


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (this.state.show) {
            return (
                <div>
                    <nav>
                        <a href="/">- Home- </a>
                        <a href="/about.html">About</a>
                        <a href="/works.html">Works</a>
                        <a href="/contacts.html">Contacts</a>
                    </nav>

                    <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                        <h4>Oh snap! You got an error!</h4>
                        <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <p>
                            <Button bsStyle="info">Take this action</Button>
                            <span> or </span>
                            <Button onClick={this.handleDismiss}>Hide Alert</Button>
                        </p>
                    </Alert>
                </div>
            );
        }

        return <Button onClick={this.handleShow}>Show Alert</Button>;
    }
}


export default Header;
