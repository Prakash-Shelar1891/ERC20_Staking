const SecondTokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

                    const SecondTokenBytecode = "0x608060405269d3c21bcecceda100000060035534801561001e57600080fd5b50600061002f61011860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350600354600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610120565b600033905090565b6112248061012f6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063715018a611610071578063715018a6146101a35780638da5cb5b146101ad57806395d89b41146101cb578063a9059cbb146101e9578063dd62ed3e14610219578063f2fde38b14610249576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce5671461015557806370a0823114610173575b600080fd5b6100c1610265565b6040516100ce9190610fba565b60405180910390f35b6100f160048036038101906100ec9190610e2d565b61029e565b6040516100fe9190610f9f565b60405180910390f35b61010f610390565b60405161011c919061101c565b60405180910390f35b61013f600480360381019061013a9190610dde565b61039a565b60405161014c9190610f9f565b60405180910390f35b61015d61071a565b60405161016a9190611037565b60405180910390f35b61018d60048036038101906101889190610d79565b61071f565b60405161019a919061101c565b60405180910390f35b6101ab610768565b005b6101b56108a2565b6040516101c29190610f84565b60405180910390f35b6101d36108cb565b6040516101e09190610fba565b60405180910390f35b61020360048036038101906101fe9190610e2d565b610904565b6040516102109190610f9f565b60405180910390f35b610233600480360381019061022e9190610da2565b610aeb565b604051610240919061101c565b60405180910390f35b610263600480360381019061025e9190610d79565b610b72565b005b6040518060400160405280600b81526020017f5365636f6e64546f6b656e00000000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161037e919061101c565b60405180910390a36001905092915050565b6000600354905090565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156103e857600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561047157600080fd5b6104c382600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d1b90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061059582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d1b90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061066782600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610707919061101c565b60405180910390a3600190509392505050565b601281565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610770610d47565b73ffffffffffffffffffffffffffffffffffffffff1661078e6108a2565b73ffffffffffffffffffffffffffffffffffffffff16146107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107db90610ffc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6040518060400160405280600281526020017f463200000000000000000000000000000000000000000000000000000000000081525081565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561095257600080fd5b6109a482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d1b90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a3982600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ad9919061101c565b60405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b7a610d47565b73ffffffffffffffffffffffffffffffffffffffff16610b986108a2565b73ffffffffffffffffffffffffffffffffffffffff1614610bee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be590610ffc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5590610fdc565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008183610d2991906110c4565b905092915050565b60008183610d3f919061106e565b905092915050565b600033905090565b600081359050610d5e816111c0565b92915050565b600081359050610d73816111d7565b92915050565b600060208284031215610d8b57600080fd5b6000610d9984828501610d4f565b91505092915050565b60008060408385031215610db557600080fd5b6000610dc385828601610d4f565b9250506020610dd485828601610d4f565b9150509250929050565b600080600060608486031215610df357600080fd5b6000610e0186828701610d4f565b9350506020610e1286828701610d4f565b9250506040610e2386828701610d64565b9150509250925092565b60008060408385031215610e4057600080fd5b6000610e4e85828601610d4f565b9250506020610e5f85828601610d64565b9150509250929050565b610e72816110f8565b82525050565b610e818161110a565b82525050565b6000610e9282611052565b610e9c818561105d565b9350610eac81856020860161114d565b610eb5816111af565b840191505092915050565b6000610ecd60268361105d565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610f3360208361105d565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b610f6f81611136565b82525050565b610f7e81611140565b82525050565b6000602082019050610f996000830184610e69565b92915050565b6000602082019050610fb46000830184610e78565b92915050565b60006020820190508181036000830152610fd48184610e87565b905092915050565b60006020820190508181036000830152610ff581610ec0565b9050919050565b6000602082019050818103600083015261101581610f26565b9050919050565b60006020820190506110316000830184610f66565b92915050565b600060208201905061104c6000830184610f75565b92915050565b600081519050919050565b600082825260208201905092915050565b600061107982611136565b915061108483611136565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110b9576110b8611180565b5b828201905092915050565b60006110cf82611136565b91506110da83611136565b9250828210156110ed576110ec611180565b5b828203905092915050565b600061110382611116565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561116b578082015181840152602081019050611150565b8381111561117a576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b6111c9816110f8565b81146111d457600080fd5b50565b6111e081611136565b81146111eb57600080fd5b5056fea26469706673582212205c4cfee59b60d17f1bf207939948179ce36ac36d46056489aafa97658bd5b0e464736f6c63430008000033";

                    const SecondTokenAddress = "0x7af2Ce3883B826f762fAcBC2eab70788A4e894F9";