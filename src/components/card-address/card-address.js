import React, { Component } from "react";
import QRCode from 'react-qr-code'

import "./card-address.css";

export default class CardAddress extends Component {

  render() {
    const { address, onDeleteAddress, USD } = this.props;

    // Переводим BTC в USD
    const currentUsdPrice = Math.round(address.balance * USD)


    return (
      <div className="card-address">
        <div className="card-address-left">
          {/* Генерируем QR код */}
          <div className="card-address-left-qr-code">
              <QRCode 
                value={address.address}
                size={121}
                // Уровни QR кода: L,M,Q,H. Чем выше уровень, тем больше весит QR.
                // Высокий уровень позволяет востановить информацию при плохом сканировании.
                level={"M"}
                includeMargin={false} 
                />
          </div>
          <div className="card-address-left-delete">
            <span
              onClick={() => {
                onDeleteAddress(address.id);
              }}
            >
              Delete
            </span>
          </div>
        </div>

        <div className="card-address-right">
          <div className="card-address-right-label">
            <span> {address.label}</span>
          </div>
          <div className="card-address-right-balance">
            <div className="card-address-right-balance-btc">
              <span> {address.balance} BTC </span>
            </div>
            <div className="card-address-right-balance-usd">
              <span> = ${currentUsdPrice}</span>
            </div>
          </div>
          <div className="card-address-right-address">
            <span
              onClick={() => {
                navigator.clipboard.writeText(address.address);
                alert('Address copied to clipboard =)')
              }}>
              {address.address}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
