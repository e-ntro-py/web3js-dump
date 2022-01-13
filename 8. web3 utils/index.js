require('dotenv').config();
const Web3 = require('web3');
const url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const _ = require('underscore');

// Checking Gas Price
web3.eth.getGasPrice((err, gasPrice) => {
    console.log(web3.utils.fromWei(gasPrice, 'ether'));
})

// Hashing functions
console.log(web3.utils.sha3('web3'));
console.log(web3.utils.keccak256('web3'));

// reason why soliditySha3 is unsafe
console.log(web3.utils.soliditySha3('234'));
console.log(web3.utils.soliditySha3({type: 'uint256', value: '234'}));

console.log(web3.utils.randomHex(1));