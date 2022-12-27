const assert = require("assert");
const addTwoNumbers = require("../index");
const ListNode = require("../ListNode")

describe("Basic test", () => {
	it("Tests", () => {
		assert.deepEqual(addTwoNumbers([3,4]), []);
		assert.deepEqual(addTwoNumbers([1,2]), []);
		assert.deepEqual(addTwoNumbers([5,6]), []);
	})
})
