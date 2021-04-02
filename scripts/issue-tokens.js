const StakeToken = artifacts.require('StakeToken');

module.exports = async function(callback) {
    let stakeToken = await StakeToken.deployed()

    await stakeToken.issueToken()

    console.log("Tokens issued")

    callback()
}
