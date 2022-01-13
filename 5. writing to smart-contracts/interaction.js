require('dotenv').config();
const Web3 = require('web3');
const url = `https://ropsten.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const abi = require('../public/NORD-data/abi.json');

const contractAddress = '0xb815a5f0dd05Ad0D89304D51cb03aff772134432';
const nordcoinContract = new web3.eth.Contract(abi, contractAddress);

const address1 = '0x669b140D0ca95F45f4Cf87255bE02E4583FF04CE';
const address2 = '0x9b41Da23c2Abae326E5b0c7Cf0f4e74B0770031C';

nordcoinContract.methods.equity_in_nordcoins(address1).call((err, balance) => {
    console.log(`Account 1 nordcoins: ${balance}`);
});

nordcoinContract.methods.total_nordcoins_bought().call((err, amount) => {
    console.log(`Total nordcoins bought up until now : ${amount}`);
});
