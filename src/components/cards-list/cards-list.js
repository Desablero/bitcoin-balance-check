import React, {Component} from 'react'

import './cards-list.css'
import CardAddress from '../card-address'

export default class CardList extends Component {

    state = {

    }  

    render(){

        const {addressList, onDeleteAddress} = this.props

        const element = addressList.map((address) => {
            return (
                <div key={address.id}><CardAddress address={address}
                                                  onDeleteAddress={onDeleteAddress}
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