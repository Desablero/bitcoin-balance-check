import React, { Component } from "react";
import BTCAPI from "../../service/btc-api";

import "./app.css";
import AppHeader from "../app-header";
import CardList from "../cards-list";
import AddAddress from "../add-address";

export default class App extends Component {
  btcApi = new BTCAPI();

  state = {
    addressList: [],
    USD: null,
    count: 1,
  };

  componentDidMount() {
    this.priceUSD()
  }

  // Функция записи в state актуального курса BTC в USD
  priceUSD () {
    this.btcApi.getUsdPrice().then((res) => {
        this.setState(() => {
          return {USD: res}
        })
      })
}

  render() {
    const { addressList, count, USD } = this.state;

    // Функция добавления новой карточки кошелька. Логика в add-address.js
    const onAddAddress = (address, label) => {
      this.btcApi.getAddressInfo(address).then((addressInfo) => {
        this.setState(({ addressList }) => {
            const oldList = addressList;
            const objLabel = { label }; // label: label
            // Добавление в state.addressList новый кошелёк
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

    // Функция удаления кошелька из state
    const onDeleteAddress = (id) => {
      this.setState(({ addressList }) => {
        const idx = this.state.addressList.findIndex((ad) => {
          return ad.id === id;
        });
        const oldList = addressList;
        // Вырезаем левую и правую часть массива относительно элемента, 
        // который нужно удалить и создаём единый массив из двух частей
        const newList = [...oldList.slice(0, idx), ...oldList.slice(idx + 1)];
        return {
          addressList: newList,
        };
      });
    };        
    
    // Пример работы программы
    if (count > 0) {
       setTimeout(
        onAddAddress("1iKupaKz422mtpsPaAoagna1Zzgwk15wN", "iKupa"),
        1000
      );
      setTimeout(
        onAddAddress("34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo", "Other Address"),
        3000
      );
      this.state.count = 0;
    }

    return (
      <div>
        <AppHeader />
        <AddAddress onAddAddress={onAddAddress} />
        <CardList
          addressList={this.state.addressList}
          onDeleteAddress={onDeleteAddress}
          USD={USD}/>
      </div>
    );
  }
}
