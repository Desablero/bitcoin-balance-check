import React, {Component} from 'react'

import './app.css'
import CardAddress from '../card-address'

export default class App extends Component {

    state = {
        addressList: ['1iKupaKz422mtpsPaAoagna1Zzgwk15wN']
    }

    render(){

        return(
            <div>
                <h1 className="main-title">BBC</h1>
                <CardAddress />
            </div>
        )
    }
}