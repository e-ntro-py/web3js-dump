require('dotenv').config();
const Web3 = require('web3');
const url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const HEXabi = require('../public/HEX-tokenData/abi.json');

const contractAddress = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39'
const contract = new web3.eth.Contract(HEXabi, contractAddress);

contract.getPastEvents('AllEvents', {
    fromBlock : 13995300,
    toBlock : 'latest' ,
}, (err, events) => {
    console.log(events[190]);
})