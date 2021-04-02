pragma solidity ^0.8.0;

import "./FirstToken.sol";
import "./SecondToken.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract StakeToken is Ownable{
    
    string public name = "Token Staking";
    FirstToken public firstToken;
    SecondToken public secondToken;

    using SafeMath for uint256;
    
    address[] stakeHolders;
    mapping(address => uint) stakersBalance;
    mapping(address => bool) hasStaked;
    mapping(address => bool) isStaking;

    event staked(address stakers, uint _amount);
    event unStaked(address stakers, uint _amount);
    
    constructor(FirstToken _FirstToken, SecondToken _SecondToken) public{
        firstToken = _FirstToken;
        secondToken = _SecondToken;
    }
// Stake Token
    function stakeTokens(uint _amount) public {
        require(_amount > 0, "Amount must be greater than 0");

        firstToken.transferFrom(msg.sender, address(this), _amount);
        stakersBalance[msg.sender] = stakersBalance[msg.sender].add(_amount);

        if(!hasStaked[msg.sender]){
            stakeHolders.push(msg.sender);
        }
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;

        emit staked(msg.sender, _amount);
    }

    function getstakeHolders() public view returns(address[] memory) {
        return stakeHolders;
    }

    function getstakersBalance(address _stakeHolder) public view returns(uint) {
        return(stakersBalance[_stakeHolder]);        
    }

    function userHasStaked(address _stakeHolder) public view returns(bool) {
        return(hasStaked[msg.sender]);        
    }

    function userIsStaking(address _stakeHolder) public view returns(bool) {
        return(isStaking[_stakeHolder]);        
    }
// Unstake Token
    function unstakeToken() public {
        uint balance = getstakersBalance(msg.sender);
        require(balance > 0, "Nothing to unstake");

        firstToken.transfer(msg.sender, balance);

        stakersBalance[msg.sender] = 0;

        isStaking[msg.sender] = false;

        emit unStaked(msg.sender, balance);
    }


// Issue Token
    function issueToken() public onlyOwner(){
        address[] memory _stakeHolders = getstakeHolders();

        for(uint i = 0; i< _stakeHolders.length; i++){
            address recipient = _stakeHolders[i];
            uint balance = getstakersBalance(recipient);
            if(balance>0){
                secondToken.transfer(recipient, balance);
            }
        }
    }
    
}