pragma solidity ^0.5.10;

contract DigitalPortfolioContract {

    // Model a user
    struct User {
        address walletAddress;
    }

    // Model a Education
    struct Education {
        uint eduNum;
        string institutionName;
        string course;
        string startDate;
        string endDate;
        string grade;
        string status;
        User user;
    }

    // Model a Certificates
    struct Certificate {
        uint certNum;
        string certTitle;
        string issuer;
        string dateObtained;
        User user;
    }

     // Model a WorkExperience
    struct WorkExperience {
        uint workExpNum;
        string companyName;
        string jobTitle;
        string startDate;
        string endDate;
        string skills;
        string jobDescription;
        User user;
    }
    
    mapping (uint => Education) edulist;
    uint public eduCount;
    
    mapping (uint => Certificate) certlist;
    uint public certCount; 

    mapping (uint => WorkExperience) worklist;
    uint public workCount;

    function registerNewEducation(string memory _institutionName, string memory _course, string memory _startDate, string memory _endDate, string memory _grade, string memory _status, address _address) public {
        eduCount ++;
        DigitalPortfolioContract.User memory newUser = User(_address);
        edulist[eduCount] = Education(eduCount, _institutionName, _course, _startDate, _endDate, _grade, _status, newUser);
    }

    function registerNewCertificate(string memory _certTitle, string memory _issuer, string memory _dateObtained, address _address) public {
        certCount ++;
        DigitalPortfolioContract.User memory newUser = User(_address);
        certlist[certCount] = Certificate(certCount, _certTitle, _issuer, _dateObtained, newUser);
    }

    function registerNewWorkExperience(string memory _companyName, string memory _jobTitle, string memory _startDate, string memory _endDate, string memory _skills, string memory _jobDescription, address _address) public {
        workCount ++;
        DigitalPortfolioContract.User memory newUser = User(_address);
        worklist[workCount] = WorkExperience(workCount, _companyName, _jobTitle, _startDate, _endDate, _skills, _jobDescription, newUser);
    }

    function getEducation(uint _eduNum) public view returns (string memory, string memory, string memory, string memory, string memory, string memory, address) {
        return (edulist[_eduNum].institutionName, edulist[_eduNum].course, edulist[_eduNum].startDate, edulist[_eduNum].endDate, edulist[_eduNum].grade, edulist[_eduNum].status, edulist[_eduNum].user.walletAddress);
    }

    function getCertificate(uint _certNum) public view returns (string memory, string memory, string memory, address) {
        return (certlist[_certNum].certTitle, certlist[_certNum].issuer, certlist[_certNum].dateObtained, certlist[_certNum].user.walletAddress);
    }

    function getWorkExperience(uint _workNum) public view returns (string memory, string memory, string memory, string memory, string memory, string memory, address){
        return (worklist[_workNum].companyName, worklist[_workNum].jobTitle, worklist[_workNum].startDate, worklist[_workNum].endDate, worklist[_workNum].skills, worklist[_workNum].jobDescription, worklist[_workNum].user.walletAddress);
    }

    function updateEducation(uint _eduNum, string memory _institutionName, string memory _course, string memory _startDate, string memory _endDate, string memory _grade, string memory _status, address _address) public {
        DigitalPortfolioContract.User memory newUser = User(_address);
        edulist[_eduNum] = Education(_eduNum, _institutionName, _course, _startDate, _endDate, _grade, _status, newUser);
    }

    function updateWorkExperience(uint _workNum, string memory _companyName, string memory _jobTitle, string memory _startDate, string memory _endDate, string memory _skills, string memory _jobDescription, address _address) public {
        DigitalPortfolioContract.User memory newUser = User(_address);
        worklist[_workNum] = WorkExperience(_workNum, _companyName, _jobTitle, _startDate, _endDate, _skills, _jobDescription, newUser);
    }

}