require('dotenv').config();
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
let url = `https://ropsten.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);

const address1 = '0x669b140D0ca95F45f4Cf87255bE02E4583FF04CE';
const address2 = '0x9b41Da23c2Abae326E5b0c7Cf0f4e74B0770031C';

const privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');

web3.eth.getTransactionCount(address1, (err, txCount) => {
    
    // Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount) ,
        to : address2,
        from : address1,
        value : web3.utils.toHex(web3.utils.toWei('0.1','ether')) ,
        gasLimit : web3.utils.toHex(21000) ,
        gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }


    // Sign the transaction
    const tx = new Tx(txObject,  {
         chain: 'ropsten' 
    });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(`txHash : ${txHash}`);

        web3.eth.getBalance(address1,(err, balance) => {
        console.log(`Account 1 : ${web3.utils.fromWei(balance,'ether')}`);
        })

        web3.eth.getBalance(address2,(err, balance) => {
            console.log(`Account 2 : ${web3.utils.fromWei(balance,'ether')}`);
        })
    })

})