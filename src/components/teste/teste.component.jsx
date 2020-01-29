import React from 'react'

class Teste extends React.Component{
    constructor(){
        super();
        this.handleChange1 = this.handleChange2.bind(this)
    }

    handleChange1(){
        console.log("button 1 clicked")
    }

    handleChange2(){
        console.log("button 2 clicked")
    }
    handleChange3 = e =>{
        console.log(e.target)
    }

    render(){
        return (
            <div>
                <button onClick={this.handleChange1}>Click handleChange</button>
                <button onClick={this.handleChange2}>Click handleChange2</button>
                <button onClick={this.handleChange1()}>Click handleChage1()</button>
                <button onClick={this.handleChange2()}>Click handleChage2()</button>
                <button onClick={this.handleChange3}>Click handleChange3</button>
            
            </div>
        )
    }

}

export default Teste;