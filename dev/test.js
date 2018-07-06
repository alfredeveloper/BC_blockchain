const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

 const previousBlockHash = 'AFS5FASF45S4FASF5ADS4F5S4FS';
 const currentBlockData = [
   {
     amount: 10,
     sender: '4SDFS4F5SD4F5SD4F',
     recipient: 'FSA5FADSASFDF'
   }
 ];
 const nonce = 145;

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 129977));
