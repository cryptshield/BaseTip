import Web3 from 'web3';

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(() => {
          resolve(web3);
        });
      } catch (e) {
        reject(e);
      }
    } else if (window.web3) {
      resolve(new Web3(window.web3.currentProvider));
    } else {
      reject(new Error('Must install Metamask'));
    }
  });
};

export default getWeb3;
