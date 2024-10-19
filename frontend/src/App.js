import React, { useState } from 'react';
import Web3 from 'web3';

const App = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTip = async () => {
    if (!window.ethereum) {
      alert('Install Metamask to use this feature.');
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const sender = accounts[0];

    const tipContract = new web3.eth.Contract(
      BaseTipABI,
      '0xYourContractAddress' // Replace with deployed contract address
    );

    try {
      await tipContract.methods.sendTip(recipient).send({
        from: sender,
        value: web3.utils.toWei(amount, 'ether')
      });
      alert('Tip sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send the tip.');
    }
  };

  return (
    <div>
      <h2>Send a Tip</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTip}>Send Tip</button>
    </div>
  );
};

export default App;
