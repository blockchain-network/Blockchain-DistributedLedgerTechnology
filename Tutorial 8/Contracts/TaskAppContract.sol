pragma solidity ^0.5.10;

contract TaskAppContract {
    // Asset
    struct Task {
        uint id;
        string description;
        uint dueDate;
        bool completionStatus;
    }

    // Mapping to Task (a list)
    mapping (uint => Task) tasklist;
    uint public taskCount;  

    // Add Task function
    function addTask(string memory _desc, uint _dueDate) public {
        taskCount ++; // auto increment the task id
        tasklist[taskCount] = Task(taskCount, _desc, _dueDate, false);
    }

    // Get Task function [Need to declare return]
    function getTask(uint _id) public view returns (string memory, uint, bool){
        return (tasklist[_id].description, tasklist[_id].dueDate, tasklist[_id].completionStatus);
    }
}
