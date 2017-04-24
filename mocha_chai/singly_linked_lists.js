module.exports = SinglyLinkedList;

function SinglyLinkedList(){
	function Node(value){
		this.data = value;
		this.next = null;
	}

	this.head = null;
	this.counter = 0;
	this.length = function(){
		return this.counter
	}

	this.first = function(){
		if(this.head === null){
			return null
		}
		return this.head.data;
	}

	this.addFront = function(info){
		var holder = this.head;
		var node = new Node(info);
		this.head = node;
		this.head.next = holder;
		this.counter++
	}

	this.popFront = function(){
		if(this.head === null)
			return null
		var returnValue = this.head.data;
		this.head = this.head.next;
		this.counter--;
		return returnValue;
	}

	this.toArray = function(){
		if(this.head === null)
			return []
		var returnArray = []
		var current = this.head;
		while(current !== null){
			returnArray.push(current.data);
			current = current.next;
		}
		return returnArray;
	}

	this.contains = function(val){
		if(this.head === null)
			return false
		var current = this.head;
		while(current !== null){
			if(current.data = val)
				return true
			current = current.next;
		}
		return false
	}

	this.toString = function(splitter = ""){
		var arr = this.toArray()
		var str = ""
		for(var i = 0 ; i < arr.length-1; i++){
			str += (arr[i] + splitter)
		}
		str += arr[arr.length-1]
		console.log(str)
		return str
	}

	this.equivalentTo = function(list){
		var thisString = this.toArray().toString();
		var thatString = list.toArray().toString();
		return thisString === thatString;
	}

	this.reverse = function(){
		var reversedArray = this.toArray().reverse();
		console.log(reversedArray)
		this.head = null;
		while(reversedArray.length !== 0){
			var el = reversedArray.pop();
			this.addFront(el)
		}
	}
}
