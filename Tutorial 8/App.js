// The object 'Contracts" will be injected here which contains the ABI, address of your deployed contract and endpoint 
var Contracts = { TaskAppContract:  {
    abi:[
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_desc",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_dueDate",
                    "type": "uint256"
                }
            ],
            "name": "addTask",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getTask",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "taskCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],

    address: "0x434cf2361ce05bd87fea24b357b0a9310f0bb887",
    endpoint: "https://goerli.infura.io/v3/"
   }
}

function TaskRegistrationApp(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}
TaskRegistrationApp.prototype.onReady = function() {
    this.init(function () {
        $('#message').append("DApp loaded successfully.");
    });
    this.bindButtons(); // bind the button to their respective functions
    this.loadTaskRegistration(); 
}

TaskRegistrationApp.prototype.bindButtons = function() {
    var that = this;
    $(document).on("click", "#button-register", function(){
        that.registerNewTask(); // call the registerNewHouse function when button-register is clicked
    })

    $(document).on("click", "#button-task", function(){
        that.getTask(); // call the registerNewHouse function when button-register is clicked
    })
}

TaskRegistrationApp.prototype.registerNewTask = function(){
    // Get input for house number and owner
    var newTaskId = $("#newTaskId").val();
    var newDescription = $("#newDescription").val();
    var newDueDate = $("#newDueDate").val();
    var newStatus = $("#newStatus").val();
    
    $("#message").text("Registering " + newTaskId);
    
    this.instance.addTask(newDescription, newDueDate,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#newTaskId").val("");
                    $("#newDescription").val("");
                    $("#newDueDate").val("");
                    $("#newStatus").val("");

                    that.loadTaskRegistration();
                }
                else{
                    $("#message").text("Registration Failed");
                }
            }
        }
    )
}

TaskRegistrationApp.prototype.init = function(cb) {
        // enable and connect to MetaMask
        if (window.ethereum) {
            this.web3 = new Web3(ethereum);
        try {
            ethereum.enable();
        } catch (error) {
        }
         }  
    
        // Create the contract interface using the ABI provided in the configuration.
        var contract_interface = this.web3.eth.contract(this.Contract.abi);
    
        // Create the contract instance for the specific address provided in the configuration.
        this.instance = contract_interface.at(this.Contract.address);
    
        cb();
    }

if(typeof(Contracts) === "undefined") var Contracts={ TaskAppContract: { abi: [] }};
var taskRegistrationApp = new TaskRegistrationApp(Contracts['TaskAppContract']);

$(document).ready(function() {
    taskRegistrationApp.onReady();
});

//Calls the taskCount function in the smart contract
TaskRegistrationApp.prototype.getTaskCount = function (cb) {
    this.instance.taskCount(function (error, taskCount) {
        cb(error, taskCount);
    });
};

// Gets the number of houses. Using a for loop, iterate through the list to get each house. 
//Bind the house details (house number and owner) to the #houseListResults object in app.html
TaskRegistrationApp.prototype.loadTaskRegistration = function () {
    var that = this;
    this.getTaskCount(function (error, taskCount) {
        if (error) {
            console.log(error)
        }
        for (let i = 1; i <= taskCount; i++) {
            var taskNo = i;
            that.getTask(taskNo, function (error, task) {
                if (error) {
                    console.log(error)
                }
            });
        }
        var nextTaskCount = taskCount.toNumber() + 1;
        $("#newTaskId").val(nextTaskCount)
        $("#newTaskId").attr('disabled', true)
        $("#newStatus").val("false")
        $("#newStatus").attr('disabled', true)
    });
}

TaskRegistrationApp.prototype.getTask = function () {
    var taskID = $("#taskID").val();

    this.instance.getTask(taskID, function(error, task) {
        if (error) {
            console.log(error)
        }
        var taskDescription = task[0];
        var taskDueDate = task[1];
        var taskStatus = task[2];

        var taskTemplate = "Description: " + taskDescription + "<br/>" + "Due Date: " + taskDueDate  + "<br/>" + "Status: " + taskStatus;
        $("#showtask").html(taskTemplate);
    })
}