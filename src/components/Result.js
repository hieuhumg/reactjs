import React, { Component } from 'react';


class Result extends Component {


    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : { this.props.olor} - Fontsize : { this.props.ontSize}px</p>
                <div id="content" style={{ color: this.props.olor, borderColor: this.props.olor, fontSize: this.props.ontSize }}>
                    Nội dung setting
                </div>
            </div>
        );
    }
}

export default Result;
