require('dotenv').config();
let Web3 = require('web3');
let url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;

let web3 = new Web3(url);
let address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

web3.eth.getBalance(address, (err, balance) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log(web3.utils.fromWei(balance, 'ether'));
    }
})