var chai = require("chai");
var expect = chai.expect;
var List = require("../singly_linked_lists.js"); 

describe("singlylinkedlist", function(){
	it("can be instantiated and you can view first item", function(){
		var list = new List();
		var x = list.first();
		expect(x).to.equal(null)
	});
	describe("#first() and #addFront()", function(){
		it("returns null if no value or the first value", function(){
			var list = new List();
			list.addFront("a");
			var first = list.first();
			expect(first).to.equal("a")
			list.addFront("b")
			var secondFirst = list.first()
			expect(secondFirst).to.equal("b")
		})
	});
	describe("#popFront() and #popBack()", function(){
		it("returns the removed element from front or back; if no item, return null", function(){
			var list = new List();
			list.addFront("a");
			list.addFront("b");
			var x = list.popFront();  // "b"
			var y = list.popFront();  // "a"
			expect(x).to.equal("b")
			expect(y).to.equal("a")
		})
	})
	describe("#length()", function(){
		it("gives the length of the list", function(){
			var list = new List();
			list.addFront("a");
			list.addFront("b");
			list.addFront("c");
			var length = list.length();
			expect(length).to.equal(3);
		})
	})
	describe("#toArray()", function(){
		it("turns a list to an array", function(){
			var list = new List();
			list.addFront("c");
			list.addFront("b");
			list.addFront("a");
			var listArray = list.toArray();
			expect(listArray).to.be.a("array")
		})
	})
	describe("#contains()", function(){
		it("returns true if contains a value, false if not", function(){
			var list = new List();
			list.addFront("a");
			list.addFront("b");
			var x = list.contains("b");  // true
			var y = list.contains("d");  // false
			expect(x).to.equal(true)
			expect(y).to.equal(true)
		})
	})
	describe("#toString()", function(){
		it("console logs the elements of the list into a string with the passed in splitter", function(){
			var list = new List()
			list.addFront("a");
			list.addFront("b");
			list.addFront("c");
			var items = list.toString(" | ");
			expect(items).to.be.a("string")
			expect(items).to.equal("c | b | a")
		})
	})
	describe("#equivalentTo()", function(){
		it("should tell whether the current list is equivalent to the passed in list", function(){
			listA = new List();
			listB = new List();
			listA.addFront("a");
			listA.addFront("b");
			listB.addFront("a");
			listB.addFront("b");
			var sameSame = listA.equivalentTo(listB);
			expect(sameSame).to.equal(true);  // true
			listB.addFront("c");
			sameSame = listA.equivalentTo(listB);
			expect(sameSame).to.equal(false);  // false
		})
	})
	describe("#reverse()", function(){
		it("should reverse itself in place", function(){
			var list = new List();
			list.addFront("a");
			list.addFront("b");
			list.addFront("c");
			expect(list.toString()).to.equal("cba")
			list.reverse();
			expect(list.toString()).to.equal("abc")

		})
	})
})