import React, {Component}from 'react';
import "./App.css";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../calculate/calculate";

export default class App extends Component{
    state = {
        total: null,
        next:null,
        operation:null,
    };

    handleClick = buttonName=>{
        this.setState(calculate(this.state, buttonName));
    };

    render(){
        return(
            <div>
                <Display value={this.state.next || this.state.total || "0"}/>
                    <ButtonPanel clickHandle={this.handleClick()} />
            </div>
        )
    }
}