import React, {Component} from 'react'

import './cards-list.css'
import CardAddress from '../card-address'

export default class CardList extends Component {

    render(){

        const {addressList, onDeleteAddress, USD} = this.props

        const element = addressList.map((address) => {
            return (
                <div key={address.id}>
                    <CardAddress address={address}
                                onDeleteAddress={onDeleteAddress}
                                USD={USD}
                /></div>
            )
        })

        return(
                <div>
                    {element}
                </div>       
        )
    }
}