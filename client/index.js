
const TokenInputElement = document.getElementById("TokenInput");
const stakeBtn = document.getElementById("stakeBtn");
const unStakeBtn = document.getElementById("unStakeBtn");

const stakeEvent = document.getElementById("stakeEvent");
const UnstakeEvent = document.getElementById("UnstakeEvent");

// StakeTokenContract.methods.getstakeHolders().call({
//     from: currentAccount,
//     gas: "3000000",
//     gasPrice: "1000000"
// }
// ).then(
//     (data) => {
//         stakeEvent.innerHTML = data;
//     }
// )

const habdleInput = (event) =>{
    TokenInput = event.target.value;
    TokenInput = Number(TokenInput);
    console.log(TokenInput);

}

const handleStake = () => {
    console.log(currentAccount);
    StakeTokenContract.methods.stakeTokens(TokenInput).send({
        from: currentAccount,
        gas: "6000000",
        gasPrice: "1000000"
    }).on("error",
    function (error, receipt) {
        console.log(error, receipt);
    }
)
}

TokenInputElement.addEventListener("change", habdleInput);
stakeBtn.addEventListener("click", handleStake);
// unStakeBtn.addEventListener("click", handleUnstake);