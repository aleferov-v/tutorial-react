import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log('isOpened', this.state.isOpened);
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Here is what jfkd;fj;sdfjjkas</div>;
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                it's dropdown
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;