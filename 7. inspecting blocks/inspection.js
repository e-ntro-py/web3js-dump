require('dotenv').config();
const Web3 = require('web3');
const url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;
const web3 = new Web3(url);
const hash = '0x86ef1a3925003c6bae487252c13e36d9f33b41343632919a9d2f95373736f95a'

web3.eth.getBlockNumber()
.then(console.log);

web3.eth.getBlock('latest')
.then((block) => {
    console.log({
        blockHash: block.hash,
        blockNumber : block.number
    })
})

web3.eth.getBlockNumber()
.then((latest) => {
    for (i=0; i < 10; i++) {
        web3.eth.getBlock(latest - i).then((block) => {
            console.log({
                blockHash: block.hash,
                blockNumber : block.number
            })
        });
    }
});

web3.eth.getBlockTransactionCount('latest').then(console.log);

web3.eth.getTransactionFromBlock(hash,2).then(console.log);