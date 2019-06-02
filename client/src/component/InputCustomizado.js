import React, { Component } from 'react'
import '../sass/InputCustomizado.scss'

export class InputCustomizado extends Component {
    render() {
        return (
            <div>
                <label for={this.props.id}><strong>{this.props.label}</strong></label><br/>
                <input id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default InputCustomizado
