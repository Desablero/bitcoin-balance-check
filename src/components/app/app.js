import React, { Component } from "react";
import BTCAPI from "../../service/btc-api";

import "./app.css";
import AppHeader from "../app-header";
import CardList from "../cards-list";
import AddAddress from "../add-address";

// 1iKupaKz422mtpsPaAoagna1Zzgwk15wN
// 34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo

export default class App extends Component {
  btcApi = new BTCAPI();

  state = {
    addressList: [],
    USD: null,
    count: 1,
  };

  priceUSD () {
    this.btcApi.getUsdPrice().then((res) => {
        this.setState(() => {
          return {USD: res}
        })
      })
}

  constructor () {
    super();
  }

  componentDidMount() {
    this.priceUSD()
  }
  render() {

    const { addressList, count, USD } = this.state;

    const onAddAddress = (address, label) => {
      this.btcApi.getAddressInfo(address).then((addressInfo) => {
        this.setState(({ addressList }) => {
            const oldList = addressList;

          const objLabel = { label };
          const newList = [
            ...oldList,
            Object.assign({}, addressInfo, objLabel),
          ];
          return {
            addressList: newList,
          };
        });
      });
    };

    const onDeleteAddress = (id) => {
      this.setState(({ addressList }) => {
        const idx = this.state.addressList.findIndex((ad) => {
          return ad.id === id;
        });
        console.log(idx);
        const oldList = addressList;
        const newList = [...oldList.slice(0, idx), ...oldList.slice(idx + 1)];
        return {
          addressList: newList,
        };
      });
    };

   
        

    // // For debuging
    if (count > 0) {
      setTimeout(
        onAddAddress("1D39pTbxbnsU7dciKkxnV5QctpfF3qM3Tj", "Test"),
        1000
      );
      setTimeout(
        onAddAddress("1iKupaKz422mtpsPaAoagna1Zzgwk15wN", "iKupa"),
        2000
      );
      setTimeout(
        onAddAddress("34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo", "Test2"),
        3000
      );
      this.state.count = 0;
    }

    console.log(addressList);
    console.log(USD);


    return (
      <div>
        <AppHeader />
        <AddAddress onAddAddress={onAddAddress} />
        <CardList
          addressList={this.state.addressList}
          onDeleteAddress={onDeleteAddress}
          USD={USD}
        />
      </div>
    );
  }
}
