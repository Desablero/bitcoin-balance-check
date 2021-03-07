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
                this.setState(({addressList}) => {
                    const oldList = addressList
                    const newList = [...oldList, addressInfo]
                    return {
                        addressList: newList
                    }
                })
            })
        }        

        const onDeleteAddress = (id) => {
            this.setState(({addressList}) => {
                const idx = this.state.addressList.findIndex((ad) => {
                    return ad.id === id
                }) 
                console.log(idx);
                const oldList = addressList
                const newList = [...oldList.slice(0,idx), ...oldList.slice(idx+1)]
                return {
                    addressList: newList
                }
            })
        }

        const {addressList} = this.state
        console.log(addressList);

        return(
            <div>
                <h1 className="main-title">BBC</h1>
                <AddAddress onAddAddress={onAddAddress}/>
                <button onClick={() => onAddAddress('34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo')}>Add</button>
                <CardList addressList={this.state.addressList}
                          onDeleteAddress={onDeleteAddress}
                    />
                
            </div>
        )
    }
}