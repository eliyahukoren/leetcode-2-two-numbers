/**
 * Definition for singly-linked list.
*/
module.exports = function ListNode(val, next){
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
};