pragma solidity ^0.5.10;

contract HouseRegistrationContract {
    // Model a house
    struct House {
        uint houseNo;
        Owner owner;
    }

    // Model a owner
    struct Owner {
        string name;
        address walletAddress;
    }

    // Read/write houses
    mapping(uint => House) private houseList;
    uint public houseCount;

    mapping (address => uint) public balances;
    
    // Get owner details 
    function getOwner (uint _houseNo) public view returns (uint houseNo, string memory ownerName, address walletAddress){
        return (houseList[_houseNo].houseNo, houseList[_houseNo].owner.name, houseList[_houseNo].owner.walletAddress);
    }

    function mintCoins(address receiver, uint amount) public {
        balances[receiver] += amount;
    }

    function sendCoins(address sender, address receiver, uint amount) public {
        require(amount <= balances[sender], "insufficient balance.");
        balances[sender] -= amount;
        balances[receiver] += amount;
    }

    function registerNewHouse (string memory _owner, address _address, uint _amount) public {
        balances[_address] -= _amount;

        houseCount ++;
        HouseRegistrationContract.Owner memory newOwner = Owner(_owner, _address); // Store owner's name and address
        houseList[houseCount] = House(houseCount, newOwner); // Creates a new house & stores it into houseList
    }
    constructor() public {
        mintCoins(0x0A15a3D2a9f415317F4eeE9237b09bA6d73f587D, 5000); // add 5000 coins to wallet
        mintCoins(0x44624E49ce8ABb1d4E89Ed6BC65FA1Ff87E27990, 10000); // add 10000 coins to wallet

        registerNewHouse("Owner 1", 0x0A15a3D2a9f415317F4eeE9237b09bA6d73f587D, 1000); // Registers the 1st house to Owner 1
        registerNewHouse("Owner 2", 0x44624E49ce8ABb1d4E89Ed6BC65FA1Ff87E27990, 1000); // Registers the next house to Owner 2
    }

    function transferHouse(uint _houseNo, string memory _owner, address _address, uint _amount) public {
        address receiver = houseList[_houseNo].owner.walletAddress;
        sendCoins(_address, receiver, _amount);

        HouseRegistrationContract.Owner memory newOwner = Owner(_owner, _address);
        houseList[_houseNo] = House(_houseNo, newOwner); // create a new house & update the houseList with the new house
    }
}