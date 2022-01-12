let Web3 = require('web3');
let url = "http://127.0.0.1:7545";

let web3 = new Web3(url);
let address = '0xb21d0281BcC350F36C948a13E5dCb8077d250A04';

web3.eth.getBalance(address , (err, balance) => {
    console.log(web3.utils.fromWei(balance, 'ether'));
})