// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

//testGas

contract TestGas {
    uint256 public gasPrice;

    function testGas() public {
        uint256 gas = tx.gasprice;

        gasPrice = gas;
    }
}
