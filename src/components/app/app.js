import React, {Component} from 'react'
import BTCAPI from '../../service/btc-api'

import './app.css'
import CardList from '../cards-list'
import AddAddress from '../add-address'

// 1iKupaKz422mtpsPaAoagna1Zzgwk15wN
// 34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo

export default class App extends Component {

    btcApi = new BTCAPI()

    state = {
        addressList: []   
    }

    render(){

        const onAddAddress = (address) => {
            this.btcApi.getAddressInfo(address)
            .then((addressInfo) => {
                console.log(addressInfo);
                this.setState(({addressList}) => {
                    const oldList = addressList
                    const newList = [...oldList, addressInfo]
                    return {
                        addressList: newList
                    }
                })
            })
        }

        console.log(this.state.addressList);
        

        const {addressList} = this.state

        return(
            <div>
                <h1 className="main-title">BBC</h1>
                <AddAddress onAddAddress={onAddAddress}/>
                <CardList addressList={this.state.addressList}/>
            </div>
        )
    }
}