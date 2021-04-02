
const FirstToken = artifacts.require('FirstToken');
const SecondToken = artifacts.require('SecondToken')
const StakeToken = artifacts.require('StakeToken');

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n){
    return web3.utils.toWei(n, 'ether')
}

contract('StakeToken', (accounts)=> {

    let firstToken, secondToken, stakeToken
    before(async ()=>{
        firstToken = await FirstToken.new()
        secondToken = await SecondToken.new()
        stakeToken = await StakeToken.new(firstToken.address, secondToken.address)

        await secondToken.transfer(stakeToken.address, tokens("1000000"))

        await firstToken.transfer(accounts[1], tokens('100'), {from: accounts[0]})
    })

    describe('FirstToken Deployment', async()=>{
        it('has a name', async()=>{
            
            const name = await firstToken.name();
            assert.equal(name, 'FirstToken')
        })
    })

    describe('SecondToken Deployment', async()=>{
        it('has a name', async()=>{
            
            const name = await secondToken.name();
            assert.equal(name, 'SecondToken')
        })
    })

    describe('StakeToken Deployment', async()=>{
        it('has a name', async()=>{
            
            const name = await stakeToken.name();
            assert.equal(name, 'Token Staking')
        })

        it('contract has tokens', async()=>{
            let balance = await secondToken.balanceOf(stakeToken.address)
            assert.equal(balance.toString(), tokens('1000000'))
        })
    })

    describe('Farming Tokens', async ()=> {
        it('Get Reward for staking', async ()=> {
            let result
            
            // Check investors balance before staking
            result = await firstToken.balanceOf(accounts[1])
            assert.equal(result.toString(), tokens('100'), 'Token should correct before staking')

            // Stake First Tokens
            await firstToken.approve(stakeToken.address, tokens('100'), { from: accounts[1]})
            await stakeToken.stakeTokens(tokens('100'), {from: accounts[1]})

            // Check staking result
            result = await firstToken.balanceOf(accounts[1])
            assert.equal(result.toString(), tokens('0'), 'FirstToken Balance correct after staking')

            result = await firstToken.balanceOf(stakeToken.address)
            assert.equal(result.toString(), tokens('100'), 'stakeToken Balance correct after staking')

            result = await stakeToken.getstakersBalance(accounts[1])
            assert.equal(result.toString(), tokens('100'), 'stakeToken Balance correct after staking')

            result = await stakeToken.userIsStaking(accounts[1])
            assert.equal(result.toString(), 'true', 'stakeToken Balance correct after staking')

            // Issue Tokens
            await stakeToken.issueToken({from: accounts[0]})
            // Check balance after issuance
            result = await secondToken.balanceOf(accounts[1])
            assert.equal(result.toString(), tokens('100'), "Seond Token Balance correct after issue")

            await stakeToken.issueToken({from: accounts[3]}).should.be.rejected;

            // Unstake Tokens
            await stakeToken.unstakeToken({from: accounts[1]})
            // Check result after unstaking
            result = await firstToken.balanceOf(accounts[1])
            assert.equal(result.toString(), tokens('100'), 'firstToken Balance correct after unstaking')

            result = await firstToken.balanceOf(stakeToken.address)
            assert.equal(result.toString(), tokens('0'), 'stakeToken Balance correct after unstaking')

            result = await stakeToken.getstakersBalance(accounts[1])
            assert.equal(result.toString(), tokens('0'), 'Invester stakeToken Balance correct after unstaking')
            
            result = await stakeToken.userIsStaking(accounts[1])
            assert.equal(result.toString(), 'false', 'Invester staking status correct after unstaking')
        })
    })
})