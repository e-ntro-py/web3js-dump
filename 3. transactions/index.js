let Web3 = require('web3');
let url = "http://127.0.0.1:7545";

let web3 = new Web3(url);
let address1 = '0xb21d0281BcC350F36C948a13E5dCb8077d250A04';
let address2 = '0xd7A0d1e5076130BA8CAf276579115f3C61E1632A';



const transaction = {
    from : address2,
    to : address1,
    value : web3.utils.toWei('15','ether')
}

web3.eth.sendTransaction(transaction)
.then(
    () => {
    web3.eth.getBalance(transaction.from , (err, balance) => {
        console.log(`Sender Balance : ${web3.utils.fromWei(balance)}`);
    })
    web3.eth.getBalance(transaction.to , (err, balance) => {
        console.log(`Receiver Balance : ${web3.utils.fromWei(balance)}`);
    })
})
.catch(err => {
    console.log(err);
})

