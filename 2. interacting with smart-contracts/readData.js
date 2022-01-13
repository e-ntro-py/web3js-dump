require('dotenv').config();
let abi = require('../public/HEX-tokenData/abi.json');
let Web3 = require('web3');

let url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;
let web3 = new Web3(url);
let contractAddress = '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39';
let accountAddress = '0x9cd83be15a79646a3d22b81fc8ddf7b7240a62cb';

let contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.name().call((err,result) => {
    console.log(result);
});

contract.methods.symbol().call((err,result) => {
    console.log(result);
});

contract.methods.totalSupply().call((err,result) => {
    console.log(result);
});

contract.methods.balanceOf(accountAddress).call((err,result) => {
    console.log(result);
});