// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseTip {
    event TipSent(address indexed from, address indexed to, uint256 amount);

    function sendTip(address payable recipient) public payable {
        require(msg.value > 0, "Tip must be greater than zero");
        recipient.transfer(msg.value);
        emit TipSent(msg.sender, recipient, msg.value);
    }
}
