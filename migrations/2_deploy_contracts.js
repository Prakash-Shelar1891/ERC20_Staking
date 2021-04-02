const FirstToken = artifacts.require('FirstToken');
const SecondToken = artifacts.require('SecondToken')
const StakeToken = artifacts.require('StakeToken');

module.exports = async function(deployer, network, account) {
    
    // Deploy FirstToken
    await deployer.deploy(FirstToken)
    const firstToken = await FirstToken.deployed()

    // Deploy SecondToken
    await deployer.deploy(SecondToken)
    const secondToken = await SecondToken.deployed()

    // Deploy StakeToken
    await deployer.deploy(StakeToken, firstToken.address, secondToken.address)
    const stakeToken = await StakeToken.deployed()

    // Transfer all SeondTokens to StakeTokens (1 million)
    await secondToken.transfer(stakeToken.address,"1000000000000000000000000")

    // Transfer 100 FisrtToken to invensters
    await firstToken.transfer(account[1], "100000000000000000000")


}