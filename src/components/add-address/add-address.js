import React, {Component} from 'react'

import './add-address.css'

export default class AddAddress extends Component {

    state = {
        label: ''
    }  

    onChangeItem (event) {
        const input = event.target.value
        this.setState(
            {label: input}
        )
    }

    render(){

        const {onAddAddress} = this.props

        const onSubmit = (e) => {
            e.preventDefault()
            onAddAddress(this.state.label)
            this.setState({label: ''})
        }
        
        return(
                <form className="add-address-form" onSubmit={onSubmit}>
                    <input placeholder="Enter the address"
                           onChange={this.onChangeItem.bind(this)} 
                           value={this.state.label}
                           type='text'
                            ></input>
                    <button>Add Address</button>
                </form>
        )
    }
}