import React, {Component} from 'react'

import './app.css'
import CardList from '../cards-list'

export default class App extends Component {

    state = {
        addressList: [
            {
                id: new Date(),
                address: '1iKupaKz422mtpsPaAoagna1Zzgwk15wN',
                label: 'iKupa'
            },
            {
                id: new Date()+1,
                address: '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo',
                label: 'Other'
            }
        ]       
    }

    render(){

        const {addressList} = this.state

        return(
            <div>
                <h1 className="main-title">BBC</h1>
                <CardList addressList={addressList}/>
            </div>
        )
    }
}