import React, {Component} from 'react'

import './cards-list.css'
import CardAddress from '../card-address'

export default class CardList extends Component {

    state = {

    }  

    render(){

        const {addressList} = this.props

        const element = addressList.map((address) => {
            return (
                <li key={address.id}><CardAddress address={address}/></li>
            )
        })

        return(
            <ul>
                {element}
            </ul>
            
        )
    }
}