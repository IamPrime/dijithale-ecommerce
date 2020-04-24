import React, { Component } from 'react';


export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container pgContainer">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title 
                        text-uppercase pt-5">
                            <h3>The Requested Page <n/>                            
                                <span className="text-danger">
                                    {this.props.location.pathname}
                                </span> 
                                <n/> was not Found 
                            </h3>
                            <video src="img/error404.mp4" autoPlay="true" />
                        </div>
                    </div>
            </div>
        );
    }
}
