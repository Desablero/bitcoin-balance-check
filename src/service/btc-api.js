export default class BTCAPI {
  _apiBase = "https://chain.api.btc.com/v3";
  _apiPrice = "https://blockchain.info/ticker";

   async getUsdPrice () {
    return await fetch(this._apiPrice)
    .then(response => response.json())
    .then((res) => res.USD.buy)
    } 

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`).catch((err) => {
      console.log(`Упс, ошибка: ${err}`);
    });

    if (!res.ok) {
      throw new Error(
        `Не удалось получить данные из API ${this._apiBase}${url}` +
          `, код ошибки: ${res.status}`
      );
    }
    return await res.json();
  }

  async getAddressInfo(address) {
    const res = await this.getResource(`/address/${address}`);
    return this._transformAddress(res);
  }


  _transformAddress = (addressInfo) => {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    
    return {
      id,
      address: addressInfo.data.address,
      balance: addressInfo.data.balance / 1e8,
      send: addressInfo.data.send,
      transactions: addressInfo.data.tx_count,
    };
  };
}
