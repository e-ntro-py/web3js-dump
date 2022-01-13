require('dotenv').config();
const bytecode = require('../public/NORD-data/bytecode.json')
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const url = `https://ropsten.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);

const address1 = '0x669b140D0ca95F45f4Cf87255bE02E4583FF04CE';
const privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');

web3.eth.getTransactionCount(address1, (err, txCount) => {
    
    // Build the transaction with the smart contract data
    const txObject = {
        nonce: web3.utils.toHex(txCount) ,
        gasLimit : web3.utils.toHex(1000000) ,
        gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei')),
        data : bytecode.code
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
        console.log(`txHash : ${txHash}`);
    })

})