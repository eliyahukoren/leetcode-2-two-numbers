const assert = require("assert");
const addTwoNumbers = require("../index");
const ListNode = require("../ListNode");

let head1 = new ListNode(2);
head1.next = new ListNode(4);
head1.next.next = new ListNode(3);

let head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(4);

let expected = new ListNode(7);
expected.next = new ListNode(0);
expected.next.next = new ListNode(8)

describe("Basic test", () => {
	let actual = addTwoNumbers(head1, head2);

	it("Tests", () => {
		assert.equal(actual.val, expected.val);
		actual.next;
		expected.next;
		assert.equal(actual.val, expected.val);
		actual.next;
		expected.next;
		assert.equal(actual.val, expected.val);

	});
});
