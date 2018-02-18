import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderUntertitel() {
        if(this.props.untertitel) {
            return <h2 className="title-bar__untertitel">{this.props.untertitel}</h2>;
        }
    }
    render() {
        return (
            <div className="titel-bar">
                <div className="wrapper">
                    <h1>{this.props.titel}</h1>
                    {this.renderUntertitel()}
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    titel: PropTypes.string.isRequired,
    untertitel: PropTypes.string
};

TitleBar.defaultProps = {
    // titel: 'Standardüberschrift'
};