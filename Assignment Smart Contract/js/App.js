// The object 'Contracts" will be injected here which contains the ABI, address of your deployed contract and endpoint 
var Contracts = { DigitalPortfolioContract:  {
    abi:[
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_issuer",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dateObtained",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "registerNewCertificate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_institutionName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_course",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_startDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_endDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_status",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "registerNewEducation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_companyName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_jobTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_startDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_endDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_skills",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_jobDescription",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "registerNewWorkExperience",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_eduNum",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_institutionName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_course",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_startDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_endDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_status",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "updateEducation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_workNum",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_companyName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_jobTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_startDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_endDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_skills",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_jobDescription",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "updateWorkExperience",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "certCount",
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
        },
        {
            "constant": true,
            "inputs": [],
            "name": "eduCount",
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
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certNum",
                    "type": "uint256"
                }
            ],
            "name": "getCertificate",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_eduNum",
                    "type": "uint256"
                }
            ],
            "name": "getEducation",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_workNum",
                    "type": "uint256"
                }
            ],
            "name": "getWorkExperience",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "workCount",
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

    address: "0x2e4c5cb777713c8da680f0ef53b805a7c8fe7761",
    endpoint: "https://goerli.infura.io/v3/"
   }}

function DigitalPortfolioContract(Contract) {
    this.web3 = null;
	this.instance = null;
	this.Contract = Contract;
}

DigitalPortfolioContract.prototype.onReady = function() {
    this.init(function () {
        $('#message').append("DApp loaded successfully.");
	});
    this.bindButtons();
	this.loadEducationRegistration();
    this.loadCertificate();
    this.loadWorkExperience();
}

DigitalPortfolioContract.prototype.init = function(cb) {
    if (window.ethereum) {
        this.web3 = new Web3(ethereum);
        try {
            ethereum.request({ method: 'eth_requestAccounts' }).then (accounts => {
                account = accounts[0];
                document.getElementById('connectWallet').innerHTML = account.slice(0, 2) + "..." + account.slice(38, 42);
            });
            // ethereum.enable();

        } catch (error) {
            
        }
    }

    ethereum.on('accountsChanged', (accounts) => {
        // Handle the new accounts, or lack thereof.
        document.getElementById('connectWallet').innerHTML = accounts.slice(0, 2) + "..." + accounts.slice(38, 42);
        window.location.reload();
        // "accounts" will always be an array, but it can be empty.
    });

    ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        if (chainId != 5) {
            alert("Please select the Goerli Ethereum Testnet!!")
        }
        
    });
    
	// Create the contract interface using the ABI provided in the configuration.
	var contract_interface = this.web3.eth.contract(this.Contract.abi);
	// Create the contract instance for the specific address provided in the configuration.
	this.instance = contract_interface.at(this.Contract.address);
	cb();
	}
	
    if(typeof(Contracts) === "undefined") var Contracts={ DigitalPortfolioContract: { abi: [] }};
	var digitalPortfolioContract = new DigitalPortfolioContract(Contracts['DigitalPortfolioContract']);
	
    $(document).ready(function() {
        digitalPortfolioContract.onReady();
	
});


DigitalPortfolioContract.prototype.bindButtons = function() {
	var that = this;
	// Education
	$(document).on("click", "#button-registerEducation", function() {
		that.registerNewEducation();
	});

    $(document).on("click", "#button-UpdateEducation", function() {
		that.UpdateEducation();
	});

    $(document).on("click", "#button-checkEducation", function() {
		that.UpdateEducationRegistration();
	});

    // Certificate
    $(document).on("click", "#button-Registercertificates", function() {
		that.registerNewCertificate();
	});

    // Work Experience
    $(document).on("click", "#button-registerworkExperience", function() {
		that.registerNewWorkExperience();
	});

    $(document).on("click", "#button-UpdateworkExperience", function() {
		that.UpdateWorkExperience();
	});

    $(document).on("click", "#button-checkWorkExperience", function() {
		that.UpdateWorkExperienceRegistration();
	});

    // Validate Education Wallet Address
    $(document).on("change", "#RegisterEducationwalletAddress", function(){
        var input = document.getElementById('RegisterEducationwalletAddress').value;
        var result = document.getElementById('validate_educationWalletResult');

        if (that.web3.isAddress(input) == true) {
            result.innerHTML = "";
        } else {
            result.innerHTML = "Please enter a valid ethereum wallet address";
        }
    });

    // Validate Certificate Wallet Address
    $(document).on("change", "#registerCertificatewalletAddress", function(){
        var input = document.getElementById('registerCertificatewalletAddress').value;
        var result = document.getElementById('validate_certificateWalletResult');

        if (that.web3.isAddress(input) == true) {
            result.innerHTML = "";
        } else {
            result.innerHTML = "Please enter a valid ethereum wallet address";
        }
    });

    // Validate Work Experience Wallet Address
    $(document).on("change", "#RegisterWorkwalletAddress", function(){
        var input = document.getElementById('RegisterWorkwalletAddress').value;
        var result = document.getElementById('validate_workexperienceWalletResult');

        if (that.web3.isAddress(input) == true) {
            result.innerHTML = "";
        } else {
            result.innerHTML = "Please enter a valid ethereum wallet address";
        }
    });     
    
}

// Get Education Count
DigitalPortfolioContract.prototype.getEduCount = function (cb) {
    this.instance.eduCount(function (error, eduCount) {
        cb(error, eduCount);
    });
};

// Get all the Education
DigitalPortfolioContract.prototype.getAllEducation = function (eduCount, cb) {
    this.instance.getEducation(eduCount, function (error, education) {
        cb(error, education);
    });
};

// Load Education
DigitalPortfolioContract.prototype.loadEducationRegistration = function () {
	var that = this;
	this.getEduCount(function (error, eduCount) {
        if (error) {
            console.log(error)
        }
        $("#educationmessage").text("Education Count: " + eduCount);
        $("#educationListResults").empty();

	for (let i = 1; i <= eduCount; i++) {
        var eduNo = i;
        that.getAllEducation(eduNo, function (error, education) {
            if (error) {
                console.log(error)
            }
            var number = i;
            var institutionName = education[0];
            var course = education[1];
            var startdate = education[2];
            var enddate = education[3];
            var grade = education[4];
            var status = education[5];
            var walletAddress = education[6];
            var educationTemplate = "<tr><td>" + number + "</td><td>" + institutionName + "</td><td>" + course + "</td><td>" 
            + startdate + "</td><td>" + enddate + "</td><td>" + grade + "</td><td>" + status + "</td><td>" + walletAddress + "</td></tr>";
            $("#educationListResults").append(educationTemplate);
        });
	}

	var nextEduCount = eduCount.toNumber() + 1;
    $("#newEducationNo").val(nextEduCount)
	$("#newEducationNo").attr('disabled', true)

    $("#RegisterEducationendDate").val("NA")
    $("#RegisterEducationendDate").attr('disabled', true)

    $("#Registergrade").val("NA")
    $("#Registergrade").attr('disabled', true)

    $("#Registerstatus").val("Enrolled")
    $("#Registerstatus").attr('disabled', true)

    });
}

// Register New Education
DigitalPortfolioContract.prototype.registerNewEducation = function() {
    var newEducationNo = $("#newEducationNo").val();
    var institutionName = $("#RegisterinstitutionName").val();
    var course = $("#Registercourse").val();
    var startDate = $("#RegisterEducationstartDate").val();
    var endDate = $("#RegisterEducationendDate").val();
    var grade = $("#Registergrade").val();
    var status = $("#Registerstatus").val();
    var walletAddress = $("#RegisterEducationwalletAddress").val();

    $("#educationmessage").text("Registering " + newEducationNo + " to " + walletAddress);

    this.instance.registerNewEducation(institutionName, course, startDate, endDate, grade, status, walletAddress,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#newEducationNo").val("");
                    $("#RegisterinstitutionName").val("");
                    $("#Registercourse").val("");
                    $("#RegisterEducationstartDate").val("");
                    $("#RegisterEducationendDate").val("");
                    $("#Registergrade").val("");
                    $("#Registerstatus").val("");
                    $("#RegisterEducationwalletAddress").val("");
                    
                    that.loadEducationRegistration();
                }
                else{
                    $("#educationmessage").text("Education Registration Failed");
                }
            }
        }
    )
}

// Update Education
DigitalPortfolioContract.prototype.UpdateEducationRegistration = function () {
	var that = this;
    var UpdateEducationNo = $("#UpdateEducationNo").val();
    that.instance.getEducation(UpdateEducationNo, function(error, education){
        var institutionName = education[0];
        var course = education[1];
        var startdate = education[2];
        var enddate = education[3];
        var grade = education[4];
        var status = education[5];
        var walletAddress = education[6];
        $("#UpdateinstitutionName").val(institutionName)
        $("#UpdateinstitutionName").attr('disabled', true)
    
        $("#Updatecourse").val(course)
        $("#Updatecourse").attr('disabled', true)

        $("#UpdateEducationstartDate").val(startdate)
        $("#UpdateEducationstartDate").attr('disabled', true)

        $("#UpdateEducationwalletAddress").val(walletAddress)
        $("#UpdateEducationwalletAddress").attr('disabled', true)

    })
            
}

DigitalPortfolioContract.prototype.UpdateEducation = function() {
    // Get input values for house number and owner
    var UpdateEducationNo = $("#UpdateEducationNo").val();
    var institutionName = $("#UpdateinstitutionName").val();
    var course = $("#Updatecourse").val();
    var startDate = $("#UpdateEducationstartDate").val();
    var endDate = $("#UpdateEducationendDate").val();
    var grade = $("#Updategrade").val();
    var status = $("#Updatestatus").val();
    var walletAddress = $("#UpdateEducationwalletAddress").val();


    $("#educationmessage").text("Updating " + UpdateEducationNo + " to " + walletAddress);

    this.instance.updateEducation(UpdateEducationNo, institutionName, course, startDate, endDate, grade, status, walletAddress,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#UpdateEducationNo").val("");
                    $("#UpdateinstitutionName").val("");
                    $("#Updatecourse").val("");
                    $("#UpdateEducationstartDate").val("");
                    $("#UpdateEducationendDate").val("");
                    $("#Updategrade").val("");
                    $("#Updatestatus").val("");
                    $("#UpdateEducationwalletAddress").val("");
                    
                    that.UpdateEducationRegistration();
                }
                else{
                    $("#educationmessage").text("Education Update Failed");
                }
            }
        }
    )
}

// Get Certificate Count
DigitalPortfolioContract.prototype.getCertCount = function (cb) {
    this.instance.certCount(function (error, certCount) {
        cb(error, certCount);
    });
};

// Get all the Certificate
DigitalPortfolioContract.prototype.getAllCertificates = function (certCount, cb) {
    this.instance.getCertificate(certCount, function (error, certificate) {
        cb(error, certificate);
    });
};

// Load Certificate
DigitalPortfolioContract.prototype.loadCertificate = function () {
	var that = this;
	this.getCertCount(function (error, certCount) {
        if (error) {
            console.log(error)
        }
        $("#certmessage").text("Certificate Count: " + certCount);
        $("#certListResults").empty();

	for (let i = 1; i <= certCount; i++) {
        var certNo = i;
        that.getAllCertificates(certNo, function (error, certificate) {
            if (error) {
                console.log(error)
            }
            var number = i;
            var certTitle = certificate[0];
            var issuer = certificate[1];
            var dateObtained = certificate[2];
            var walletAddress = certificate[3];

            var certificateTemplate = "<tr><td>" + number + "</td><td>" + certTitle + "</td><td>" + issuer + "</td><td>" 
            + dateObtained + "</td><td>" + walletAddress + "</td></tr>";
            $("#certListResults").append(certificateTemplate);
        });
	}
    var nextCertCount = certCount.toNumber() + 1;
    $("#newCertNo").val(nextCertCount)
	$("#newCertNo").attr('disabled', true)

});
}

// Register New Certificate
DigitalPortfolioContract.prototype.registerNewCertificate = function() {
    var newCertNo = $("#newCertNo").val();
    var certTitle = $("#registerCertificateTitle").val();
    var issuer = $("#registerCertificateIssuer").val();
    var dateObtained = $("#registerDateObtained").val();
    var walletAddress = $("#registerCertificatewalletAddress").val();

    $("#certmessage").text("Registering " + newCertNo + " to " + walletAddress);

    this.instance.registerNewCertificate(certTitle, issuer, dateObtained, walletAddress,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#newCertNo").val("");
                    $("#registerCertificateTitle").val("");
                    $("#registerCertificateIssuer").val("");
                    $("#registerDateObtained").val("");
                    $("#registerCertificatewalletAddress").val("");
                    
                    that.loadCertificate();
                }
                else{
                    $("#certmessage").text("Certificate Registration Failed");
                }
            }
        }
    )
}


// Get Work Experience Count
DigitalPortfolioContract.prototype.getworkExpCount = function (cb) {
    this.instance.workCount(function (error, workCount) {
        cb(error, workCount);
    });
};

// Get all the Work Experience
DigitalPortfolioContract.prototype.getAllWorkExperience = function (workCount, cb) {
    this.instance.getWorkExperience(workCount, function (error, workExperience) {
        cb(error, workExperience);
    });
};

// Load Work Experience
DigitalPortfolioContract.prototype.loadWorkExperience = function () {
	var that = this;
	this.getworkExpCount(function (error, workCount) {
        if (error) {
            console.log(error)
        }
        $("#workmessage").text("Work Experience Count: " + workCount);
        $("#workListResults").empty();

	for (let i = 1; i <= workCount; i++) {
        var workNo = i;
        that.getAllWorkExperience(workNo, function (error, workExperience) {
            if (error) {
                console.log(error)
            }
            var number = i;
            var companyName = workExperience[0];
            var jobTitle = workExperience[1];
            var startDate = workExperience[2];
            var endDate = workExperience[3];
            var skills = workExperience[4];
            var jobDescription = workExperience[5];
            var walletAddress = workExperience[6];

            var workExperienceTemplate = "<tr><td>" + number + "</td><td>" + companyName + "</td><td>" + jobTitle + "</td><td>" 
            + startDate + "</td><td>" + endDate + "</td><td>" + skills + "</td><td>"  + jobDescription + "</td><td>" 
            + walletAddress + "</td></tr>";
            $("#workListResults").append(workExperienceTemplate);
        });
	}
    var nextWorkCount = workCount.toNumber() + 1;
    $("#newWorkExpNo").val(nextWorkCount)
	$("#newWorkExpNo").attr('disabled', true)

    $("#registerWorkendDate").val("NA")
    $("#registerWorkendDate").attr('disabled', true)

});
}

// Register Work Experience
DigitalPortfolioContract.prototype.registerNewWorkExperience = function() {
    var newWorkExpNo = $("#newWorkExpNo").val();
    var companyName = $("#registerCompanyName").val();
    var jobTitle = $("#registerJobTitle").val();
    var startDate = $("#registerWorkstartDate").val();
    var endDate = $("#registerWorkendDate").val();
    var skills = $("#registerSkills").val();
    var jobDescription = $("#registerJobDescription").val();
    var walletAddress = $("#RegisterWorkwalletAddress").val();

    $("#workmessage").text("Registering " + newWorkExpNo + " to " + walletAddress);

    this.instance.registerNewWorkExperience(companyName, jobTitle, startDate, endDate, skills, jobDescription, walletAddress,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#newWorkExpNo").val("");
                    $("#registerCompanyName").val("");
                    $("#registerJobTitle").val("");
                    $("#registerWorkstartDate").val("");
                    $("#registerWorkendDate").val("");
                    $("#registerSkills").val("");
                    $("#registerJobDescription").val("");
                    $("#RegisterWorkwalletAddress").val("");
                    
                    that.loadWorkExperience();
                }
                else{
                    $("#workmessage").text("Work Experience Registration Failed");
                }
            }
        }
    )
}

// Update Work Experience
DigitalPortfolioContract.prototype.UpdateWorkExperienceRegistration = function () {
	var that = this;
    var UpdateWorkExpNo = $("#UpdateWorkExpNo").val();
    that.instance.getWorkExperience(UpdateWorkExpNo, function(error, workExperience){
        var companyName = workExperience[0];
        var jobTitle = workExperience[1];
        var startDate = workExperience[2];
        var endDate = workExperience[3];
        var skills = workExperience[4];
        var jobDescription = workExperience[5];
        var walletAddress = workExperience[6];

        $("#UpdateCompanyName").val(companyName)
        $("#UpdateCompanyName").attr('disabled', true)
    
        $("#UpdateJobTitle").val(jobTitle)
        $("#UpdateJobTitle").attr('disabled', true)

        $("#UpdateWorkstartDate").val(startDate)
        $("#UpdateWorkstartDate").attr('disabled', true)

        $("#UpdateSkills").val(skills)
        $("#UpdateSkills").attr('disabled', true)

        $("#UpdateJobDescription").val(jobDescription)
        $("#UpdateJobDescription").attr('disabled', true)

        $("#UpdateWorkwalletAddress").val(walletAddress)
        $("#UpdateWorkwalletAddress").attr('disabled', true)

    })
            
}

DigitalPortfolioContract.prototype.UpdateWorkExperience = function() {
    // Get input values for house number and owner
    var UpdateWorkExpNo = $("#UpdateWorkExpNo").val();
    var companyName = $("#UpdateCompanyName").val();
    var jobTitle = $("#UpdateJobTitle").val();
    var startDate = $("#UpdateWorkstartDate").val();
    var endDate = $("#UpdateWorkendDate").val();
    var skills = $("#UpdateSkills").val();
    var jobDescription = $("#UpdateJobDescription").val();
    var walletAddress = $("#UpdateWorkwalletAddress").val();


    $("#workmessage").text("Updating " + UpdateWorkExpNo + " to " + walletAddress);

    this.instance.updateWorkExperience(UpdateWorkExpNo, companyName, jobTitle, startDate, endDate, skills, jobDescription, walletAddress,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function(){
            if(error){
                console.log(error);
            }
            else{
                if (receipt.status == 1){
                    $("#UpdateWorkExpNo").val("");
                    $("#UpdateCompanyName").val("");
                    $("#UpdateJobTitle").val("");
                    $("#UpdateWorkstartDate").val("");
                    $("#UpdateWorkendDate").val("");
                    $("#UpdateSkills").val("");
                    $("#UpdateJobDescription").val("");
                    $("#UpdateWorkwalletAddress").val("");
                    
                    that.UpdateWorkExperienceRegistration();
                }
                else{
                    $("#workmessage").text("Work Experience Update Failed");
                }
            }
        }
    )
}


// Search Wallet Address
function search_EducationWalletAddress(){
    let input = document.getElementById('searchbar').value
    let rows = document.getElementsByTagName("tr");
    
    for (i = 0; i < rows.length; i++) {
        rows[0].style.display="table-row";
        if (rows[i].innerHTML.includes(input)) {
            rows[i].style.display="table-row";
        }
        else {
            rows[i].style.display="none";                    
        }
    }
}

function search_CertificatesWalletAddress(){
    let input = document.getElementById('searchbar').value
    let rows = document.getElementsByTagName("tr");
    
    for (i = 0; i < rows.length; i++) {
        rows[0].style.display="table-row";
        if (rows[i].innerHTML.includes(input)) {
            rows[i].style.display="table-row";
        }
        else {
            rows[i].style.display="none";                    
        }
    }
}

function search_WorkExperienceWalletAddress(){
    let input = document.getElementById('searchbar').value
    let rows = document.getElementsByTagName("tr");
    
    for (i = 0; i < rows.length; i++) {
        rows[0].style.display="table-row";
        if (rows[i].innerHTML.includes(input)) {
            rows[i].style.display="table-row";
        }
        else {
            rows[i].style.display="none";                    
        }
    }
}

// Validate End Date
function validate_EducationEndDate(){
    var input = document.getElementById('UpdateEducationendDate').value;
    var start_input = document.getElementById('UpdateEducationstartDate').value;
    var start_date = new Date(start_input);
    var input_date = new Date(input);
    var today_date = new Date();

    if (input_date > today_date) {
        validate_educationEndDate.innerHTML = "Please ensure that the education end date is lesser than today date.";
    } else if (start_date > input_date) {
        validate_educationEndDate.innerHTML = "Please ensure that the education end date is greater than the start date.";
    } else {
        validate_educationEndDate.innerHTML = "";
    }
}

function validate_WorkExperienceEndDate(){
    var input = document.getElementById('UpdateWorkendDate').value;
    var start_input = document.getElementById('UpdateWorkstartDate').value;
    var start_date = new Date(start_input);
    var input_date = new Date(input);
    var today_date = new Date();

    if (input_date > today_date) {
        validate_workexperienceEndDate.innerHTML = "Please ensure that the work experience end date is lesser than today date.";
    } else if (start_date > input_date) {
        validate_workexperienceEndDate.innerHTML = "Please ensure that the work experience end date is greater than the start date.";
    } else {
        validate_workexperienceEndDate.innerHTML = "";
    }

}

// Select Education Course
function addCourse(s1, s2){
    var institution = document.getElementById(s1);
    var course = document.getElementById(s2);

    course.innerHTML = '';

    if (institution.value == "Nanyang Polytechnic"){
        var optionArray = ['Common Business Programme|Common Business Programme', 'Common Design & Media Programme|Common Design & Media Programme', 
        'Common Engineering Programme|Common Engineering Programme', 'Common ICT Programme|Common ICT Programme', 'Common Science Programme|Common Science Programme',
        'Diploma in Accountancy & Finance|Diploma in Accountancy & Finance', 'Diploma in Advanced & Digital Manufacturing|Diploma in Advanced & Digital Manufacturing', 
        'Diploma in Aeronautical & Aerospace Technology|Diploma in Aeronautical & Aerospace Technology', 'Diploma in Aerospace Systems & Management|Diploma in Aerospace Systems & Management',
        'Diploma in AI & Data Engineering|Diploma in AI & Data Engineering', 'Diploma in Animation, Games & Visual Effects|Diploma in Animation, Games & Visual Effects', 
        'Diploma in Applied AI & Analytics|Diploma in Applied AI & Analytics', 'Diploma in Applied Chemistry|Diploma in Applied Chemistry', 'Diploma in Architecture|Diploma in Architecture', 
        'Diploma in Banking & Finance|Diploma in Banking & Finance', 'Diploma in Biologics & Process Technology|Diploma in Biologics & Process Technology', 
        'Diploma in Biomedical Engineering|Diploma in Biomedical Engineering', 'Diploma in Business & Financial Technology|Diploma in Business & Financial Technology', 
        'Diploma in Business Management|Diploma in Business Management', 'Diploma in Chemical & Pharmaceutical Technology|Diploma in Chemical & Pharmaceutical Technology', 
        'Diploma in Communication & Motion Design|Diploma in Communication & Motion Design', 'Diploma in Cybersecurity & Digital Forensics|Diploma in Cybersecurity & Digital Forensics', 
        'Diploma in Electronic & Computer Engineering|Diploma in Electronic & Computer Engineering', 'Diploma in Engineering with Business|Diploma in Engineering with Business', 
        'Diploma in Experiential Product & Interior Design|Diploma in Experiential Product & Interior Design', 'Diploma in Food & Beverage Business|Diploma in Food & Beverage Business', 
        'Diploma in Food Science & Nutrition|Diploma in Food Science & Nutrition', 'Diploma in Game Development & Technology|Diploma in Game Development & Technology', 
        'Diploma in Hospitality & Tourism Management|Diploma in Hospitality & Tourism Management', 'Diploma in Infocomm & Media Engineering|Diploma in Infocomm & Media Engineering', 
        'Diploma in Infocomm & Security|Diploma in Infocomm & Security', 'Diploma in Information Technology|Diploma in Information Technology', 'Diploma in Mass Media Management|Diploma in Mass Media Management', 
        'Diploma in Nanotechnology & Materials Science|Diploma in Nanotechnology & Materials Science', 'Diploma in Nursing|Diploma in Nursing', 'Diploma in Oral Health Therapy|Diploma in Oral Health Therapy', 
        'Diploma in Pharmaceutical Science|Diploma in Pharmaceutical Science', 'Diploma in Robotics & Mechatronics|Diploma in Robotics & Mechatronics', 
        'Diploma in Social Work|Diploma in Social Work', 'Diploma in Sport & Wellness Management|Diploma in Sport & Wellness Management'];

    } else if (institution.value == "Temasek Polytechnic") {
        var optionArray = ['Common Business Programme|Common Business Programme', 'Common Design Programme|Common Design Programme', 'Common Engineering Programme|Common Engineering Programme', 
        'Common ICT Programme|Common ICT Programme', 'Common Science Programme|Common Science Programme', 'Diploma in Accountancy & Finance|Diploma in Accountancy & Finance', 
        'Diploma in Aerospace Electronics|Diploma in Aerospace Electronics', 'Diploma in Aerospace Engineering|Diploma in Aerospace Engineering', 'Diploma in Apparel Design & Merchandising|Diploma in Apparel Design & Merchandising', 
        'Diploma in Applied Artificial Intelligence|Diploma in Applied Artificial Intelligence', 'Diploma in Architectural Technology & Building Services|Diploma in Architectural Technology & Building Services', 
        'Diploma in Aviation Management|Diploma in Aviation Management', 'Diploma in Big Data & Analytics|Diploma in Big Data & Analytics', 'Diploma in Biomedical Engineering|Diploma in Biomedical Engineering', 
        'Diploma in Business|Diploma in Business', 'Diploma in Business Process & Systems Engineering|Diploma in Business Process & Systems Engineering', 'Diploma in Chemical Engineering|Diploma in Chemical Engineering', 
        'Diploma in Communication Design|Diploma in Communication Design', 'Diploma in Communications & Media Management|Diploma in Communications & Media Management', 'Diploma in Computer Engineering|Diploma in Computer Engineering', 
        'Diploma in Culinary & Catering Management|Diploma in Culinary & Catering Management', 'Diploma in Cybersecurity & Digital Forensics|Diploma in Cybersecurity & Digital Forensics', 'Diploma in Digital Film & Television|Diploma in Digital Film & Television', 
        'Diploma in Early Childhood Development & Education|Diploma in Early Childhood Development & Education', 'Diploma in Electronics|Diploma in Electronics', 'Diploma in Food, Nutrition & Culinary Science|Diploma in Food, Nutrition & Culinary Science', 
        'Diploma in Hospitality & Tourism Management|Diploma in Hospitality & Tourism Management', 'Diploma in Immersive Media & Game Development|Diploma in Immersive Media & Game Development', 'Diploma in Information Technology|Diploma in Information Technology', 
        'Diploma in Integrated Facility Management|Diploma in Integrated Facility Management', 'Diploma in Interior Architecture & Design|Diploma in Interior Architecture & Design', 'Diploma in International Trade & Logistics|Diploma in International Trade & Logistics', 
        'Diploma in Law & Management|Diploma in Law & Management', 'Diploma in Marketing|Diploma in Marketing', 'Diploma in Mechatronics|Diploma in Mechatronics', 'Diploma in Medical Biotechnology|Diploma in Medical Biotechnology', 'Diploma in Pharmaceutical Science|Diploma in Pharmaceutical Science', 
        'Diploma in Product Experience & Design|Diploma in Product Experience & Design', 'Diploma in Psychology Studies|Diploma in Psychology Studies', 'Diploma in Social Sciences in Gerontology|Diploma in Social Sciences in Gerontology', 'Diploma in Veterinary Technology|Diploma in Veterinary Technology'];

    } else if (institution.value == "Singapore Polytechnic") {
        var optionArray = ['Common Business Programme|Common Business Programme', 'Common Engineering Programme|Common Engineering Programme', 'Common ICT Programme|Common ICT Programme', 'Common Science Programme|Common Science Programme', 'Diploma in Accountancy|Diploma in Accountancy', 
        'Diploma in Aeronautical Engineering|Diploma in Aeronautical Engineering', 'Diploma in Aerospace Electronics|Diploma in Aerospace Electronics', 'Diploma in Applied AI & Analytics|Diploma in Applied AI & Analytics', 'Diploma in Applied Chemistry|Diploma in Applied Chemistry', 
        'Diploma in Architecture|Diploma in Architecture', 'Diploma in Banking & Finance|Diploma in Banking & Finance', 'Diploma in Biomedical Science|Diploma in Biomedical Science', 'Diploma in Business Administration|Diploma in Business Administration', 'Diploma in Chemical Engineering|Diploma in Chemical Engineering', 
        'Diploma in Civil Engineering|Diploma in Civil Engineering', 'Diploma in Computer Engineering|Diploma in Computer Engineering', 'Diploma in Electrical & Electronic Engineering|Diploma in Electrical & Electronic Engineering', 'Diploma in Engineering with Business|Diploma in Engineering with Business', 
        'Diploma in Facilities Management|Diploma in Facilities Management', 'Diploma in Food Science & Technology|Diploma in Food Science & Technology', 'Diploma in Human Resource Management with Psychology|Diploma in Human Resource Management with Psychology', 'Diploma in Infocomm Security Management|Diploma in Infocomm Security Management', 
        'Diploma in Information Technology|Diploma in Information Technology', 'Diploma in Integrated Events & Project Management|Diploma in Integrated Events & Project Management', 'Diploma in Interior Design|Diploma in Interior Design', 'Diploma in Landscape Architecture|Diploma in Landscape Architecture', 
        'Diploma in Marine Engineering|Diploma in Marine Engineering', 'Diploma in Maritime Business|Diploma in Maritime Business', 'Diploma in Mechanical Engineering|Diploma in Mechanical Engineering', 'Diploma in Mechatronics & Robotics|Diploma in Mechatronics & Robotics', 
        'Diploma in Media, Arts & Design|Diploma in Media, Arts & Design', 'Diploma in Nautical Studies|Diploma in Nautical Studies', 'Diploma in Optometry|Diploma in Optometry', 'Diploma in Perfumery & Cosmetic Science|Diploma in Perfumery & Cosmetic Science'];

    } else if (institution.value == "Republic Polytechnic") {
        var optionArray = ['Common Arts, Design and Media Programme|Common Arts, Design and Media Programme', 'Common Business Programme|Common Business Programme', 'Common Engineering Programme|Common Engineering Programme', 'Common ICT Programme|Common ICT Programme', 'Common Science Programme|Common Science Programme', 
        'Common Sports and Health Programme|Common Sports and Health Programme', 'Diploma in  Aerospace Engineering|Diploma in  Aerospace Engineering', 'Diploma in  Applied Chemistry|Diploma in  Applied Chemistry', 'Diploma in Arts & Theatre Management|Diploma in Arts & Theatre Management', 'Diploma in Aviation Management|Diploma in Aviation Management', 
        'Diploma in Biomedical Science|Diploma in Biomedical Science', 'Diploma in Biotechnology|Diploma in Biotechnology', 'Diploma in Business|Diploma in Business', 'Diploma in Business Information Systems|Diploma in Business Information Systems', 'Diploma in Consumer Behaviour & Research|Diploma in Consumer Behaviour & Research', 
        'Diploma in Customer Experience Management with Business|Diploma in Customer Experience Management with Business', 'Diploma in Design for Games & Gamification|Diploma in Design for Games & Gamification', 'Diploma in Design for User Experience|Diploma in Design for User Experience', 'Diploma in Digital Design and Development|Diploma in Digital Design and Development', 
        'Diploma in Electrical & Electronic Engineering|Diploma in Electrical & Electronic Engineering', 'Diploma in Engineering Design with Business|Diploma in Engineering Design with Business', 'Diploma in Engineering Systems & Management|Diploma in Engineering Systems & Management', 'Diploma in Environmental & Marine Science|Diploma in Environmental & Marine Science', 
        'Diploma in Financial Technology|Diploma in Financial Technology', 'Diploma in Health Management & Promotion|Diploma in Health Management & Promotion', 'Diploma in Health Services Management|Diploma in Health Services Management', 'Diploma in Hotel & Hospitality Management|Diploma in Hotel & Hospitality Management', 
        'Diploma in Human Resource Management with Psychology|Diploma in Human Resource Management with Psychology', 'Diploma in Industrial & Operations Management|Diploma in Industrial & Operations Management', 'Diploma in Infocomm Security Management|Diploma in Infocomm Security Management', 'Diploma in Information Technology|Diploma in Information Technology', 
        'Diploma in Integrated Events Management|Diploma in Integrated Events Management', 'Diploma in Mass Communication|Diploma in Mass Communication', 'Diploma in Media Production & Design|Diploma in Media Production & Design', 'Diploma in Outdoor & Adventure Learning|Diploma in Outdoor & Adventure Learning', 'Diploma in Pharmaceutical Science|Diploma in Pharmaceutical Science', 
        'Diploma in Restaurant & Culinary Operations|Diploma in Restaurant & Culinary Operations', 'Diploma in Sonic Arts|Diploma in Sonic Arts', 'Diploma in Sport & Exercise Science|Diploma in Sport & Exercise Science', 'Diploma in Sport Coaching|Diploma in Sport Coaching', 'Diploma in Supply Chain Management|Diploma in Supply Chain Management', 
        'Diploma in Sustainable Built Environment|Diploma in Sustainable Built Environment', 'Diploma in Tourism Management with Technology|Diploma in Tourism Management with Technology'];

    } else if (institution.value == "Ngee Ann Polytechnic") {
        var optionArray = ['Common Business Programme|Common Business Programme', 'Common Engineering Programme|Common Engineering Programme', 'Common ICT Programme|Common ICT Programme', 'Common Media Programme|Common Media Programme', 'Common Science Programme|Common Science Programme', 'Diploma in Accountancy|Diploma in Accountancy', 'Diploma in Aerospace Engineering|Diploma in Aerospace Engineering', 
        'Diploma in Arts Business Management|Diploma in Arts Business Management', 'Diploma in Automation & Mechatronic Systems|Diploma in Automation & Mechatronic Systems', 'Diploma in Banking & Finance|Diploma in Banking & Finance', 'Diploma in Biomedical Engineering|Diploma in Biomedical Engineering', 'Diploma in Biomedical Science|Diploma in Biomedical Science', 
        'Diploma in Business Studies|Diploma in Business Studies', 'Diploma in Chemical & Biomolecular Engineering|Diploma in Chemical & Biomolecular Engineering', 'Diploma in Chinese Media & Communication|Diploma in Chinese Media & Communication', 'Diploma in Chinese Studies|Diploma in Chinese Studies', 'Diploma in Community Development|Diploma in Community Development', 
        'Diploma in Cybersecurity & Digital Forensics|Diploma in Cybersecurity & Digital Forensics', 'Diploma in Data Science|Diploma in Data Science', 'Diploma in Design|Diploma in Design', 'Diploma in Early Childhood Development & Education|Diploma in Early Childhood Development & Education', 'Diploma in Electrical Engineering|Diploma in Electrical Engineering', 
        'Diploma in Electronic & Computer Engineering|Diploma in Electronic & Computer Engineering', 'Diploma in Engineering Science|Diploma in Engineering Science', 'Diploma in Environmental & Water Technology|Diploma in Environmental & Water Technology', 'Diploma in Film, Sound & Video|Diploma in Film, Sound & Video', 'Diploma in Hotel & Leisure Facilities Management|Diploma in Hotel & Leisure Facilities Management', 
        'Diploma in Immersive Media|Diploma in Immersive Media', 'Diploma in Information Technology|Diploma in Information Technology', 'Diploma in International Trade & Business|Diploma in International Trade & Business', 'Diploma in Landscape Design & Horticulture|Diploma in Landscape Design & Horticulture', 'Diploma in Marine & Offshore Technology|Diploma in Marine & Offshore Technology', 
        'Diploma in Mass Communication|Diploma in Mass Communication', 'Diploma in Mechanical Engineering|Diploma in Mechanical Engineering', 'Diploma in Media Post-Production|Diploma in Media Post-Production', 'Diploma in Nursing|Diploma in Nursing', 'Diploma in Optometry|Diploma in Optometry', 'Diploma in Phramaceutical Science|Diploma in Phramaceutical Science', 'Diploma in Real Estate Business|Diploma in Real Estate Business', 
        'Diploma in Tamil Studies with Early Education|Diploma in Tamil Studies with Early Education', 'Diploma in Tourism & Resort Management|Diploma in Tourism & Resort Management'];

    } else {

    }

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");

        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        course.options.add(newOption)
    }
}

// Validate Education User
function validate_EducationRegistrationUser(){
    var input = prompt('Enter the education Password');

    if (input == 'education123') {
        window.open('registerEducation.html', '_self');
    } else {
        alert("You have entered the wrong password!");
        window.open('education.html', '_self');
    }
}

function validate_EducationUpdateUser(){
    var input = prompt('Enter the education Password');

    if (input == 'education123') {
        window.open('updateEducation.html', '_self');
    } else {
        alert("You have entered the wrong password!");
        window.open('education.html', '_self');
    }
}

// Validate Certificate User
function validate_CertificateRegistrationUser(){
    var input = prompt('Enter the certificate Password');

    if (input == 'certificate123') {
        window.open('registerCertificates.html', '_self');
    } else {
        alert("You have entered the wrong password!");
        window.open('certificates.html', '_self');
    }
}

// Validate Work Experience User
function validate_WorkRegistrationUser(){
    var input = prompt('Enter the work experience Password');

    if (input == 'work123') {
        window.open('registerWorkExperience.html', '_self');
    } else {
        alert("You have entered the wrong password!");
        window.open('workExperience.html', '_self');
    }
}

function validate_WorkUpdateUser(){
    var input = prompt('Enter the work experience Password');

    if (input == 'work123') {
        window.open('updateWorkExperience.html', '_self');
    } else {
        alert("You have entered the wrong password!");
        window.open('workExperience.html', '_self');
    }
}

// Validate Certificate Date Obtained
function validate_certificateDate(){
    var input = document.getElementById('registerDateObtained').value;
    var inputs = new Date(input).setHours(0,0,0,0);
    var input_date = new Date(inputs);
    
    var today_date = new Date();

    if (input_date < today_date || input_date == today_date) {
        validate_certificateDateObtained.innerHTML = "";
    } else {
        validate_certificateDateObtained.innerHTML = "Please ensure that the certificate date is lesser than or equals to today date.";
    }
}