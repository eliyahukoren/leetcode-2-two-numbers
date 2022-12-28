/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require("./ListNode");

module.exports = addTwoNumbers = (l1, l2) => {
	let fake = new ListNode(-1);
	let result = fake;
	let carry = 0;

	while (l1 !== null || l2 !== null) {
		let l1Val = l1 ? l1.val : 0;
		let l2Val = l2 ? l2.val : 0;

		let digit = Math.floor((l1Val + l2Val + carry) % 10);
		carry = Math.floor((l1Val + l2Val + carry) / 10);
		
		fake.next = new ListNode(digit);
		fake = fake.next;

		l1 = l1?.next ? l1.next : null;
		l2 = l2?.next ? l2.next : null;
	}

	return result.next;
};
