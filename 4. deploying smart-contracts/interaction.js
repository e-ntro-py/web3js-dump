require('dotenv').config();
const Web3 = require('web3');
const url = `https://ropsten.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const abi = require('../public/NORD-data/abi.json');

const contractAddress = '0xb815a5f0dd05Ad0D89304D51cb03aff772134432';
const nordcoinContract = new web3.eth.Contract(abi, contractAddress);

nordcoinContract.methods.name().call((err, name) => {
    console.log(`Coin name : ${name}`);
});

nordcoinContract.methods.symbol().call((err, symbol) => {
    console.log(`Symbol : ${symbol}`);
});

nordcoinContract.methods.max_nordcoins().call((err, amount) => {
    console.log(`Total nordcoins : ${amount}`);
});
