function changeEnough(itemPrice, amountOfChange) {
    let totalInWallet = (amountOfChange[0] * 0.25) + 
                        (amountOfChange[1] * 0.10) + 
                        (amountOfChange[2] * 0.05) + 
                        (amountOfChange[3] * 0.01);
    return totalInWallet >= itemPrice;
}