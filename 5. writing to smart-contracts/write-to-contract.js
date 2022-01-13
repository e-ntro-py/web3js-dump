require('dotenv').config();
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
let url = `https://ropsten.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const abi = require('../public/abi.json');

const address1 = '0x669b140D0ca95F45f4Cf87255bE02E4583FF04CE';
const privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');

const contractAddress = '0xb815a5f0dd05Ad0D89304D51cb03aff772134432';
const nordcoinContract = new web3.eth.Contract(abi, contractAddress);
const data = nordcoinContract.methods.buy_nordcoins(address1, 10).encodeABI();

web3.eth.getTransactionCount(address1, (err, txCount) => {

    // Create transaction object
    const txObject = {
        nonce: web3.utils.toHex(txCount) ,
        gasLimit : web3.utils.toHex(8000000) ,
        gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei')),
        to : contractAddress, // smart-contract address
        data : data
    }

    // Signing the transaction with EthereumTX
    const tx = new Tx(txObject,  {
        chain: 'ropsten' 
    });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    // Broadcast the transaction using Web3
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(`err : ${err} , txHash : ${txHash}`);
    })
});