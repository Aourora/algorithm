//数组栈
class ArrayStack {
  constructor(size = 20) {
    this.size = size;
    this.stack = new Array();
  }
  push(item) {
    if (this.stack.length >= this.size) {
      return false;
    }
    this.stack.push(item);
    return true;
  }
  pop() {
    return this.stack.length > 0 ? this.stack.pop() : null;
  }
}

//1.用栈实现混合运算
const OPERATION = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "**": 3,
};
const OPERATION_FUN = {
  "+": (a, b) => {
    return parseFloat(b) + parseFloat(a);
  },
  "-": (a, b) => {
    return parseFloat(b) - parseFloat(a);
  },
  "*": (a, b) => {
    return parseFloat(b) * parseFloat(a);
  },
  "/": (a, b) => {
    return parseFloat(b) / parseFloat(a);
  },
  "**": (a, b) => {
    return parseFloat(b) ** parseFloat(a);
  },
};

String.prototype.operation = function () {
  let value = this.valueOf();
  let temp = "";
  let flag = 0,
    start = 0;
  for (let i = 0, len = value.length; i < len; ++i) {
    if (value[i] === "(") {
      !flag && (start = i);
      ++flag;
    } else if (value[i] === ")") {
      --flag;
      !flag &&
        (temp =
          temp + String.prototype.operation.call(value.slice(start + 1, i)));
    } else if (!flag) {
      temp = temp + value[i];
    }
  }

  const stackNumber = [],
    stackOperator = [];
  while (temp !== "") {
    stackNumber.push(/^(\d|\.)+/.exec(temp)[0]);
    temp = temp.replace(/^(\d|\.)+/, "");
    if (temp === "") continue;
    const operation = /^\D+/.exec(temp)[0];
    if (
      stackOperator.length > 0 &&
      OPERATION[stackOperator[stackOperator.length - 1]] >= OPERATION[operation]
    ) {
      stackNumber.push(
        OPERATION_FUN[stackOperator.pop()](stackNumber.pop(), stackNumber.pop())
      );
    }
    stackOperator.push(operation);
    temp = temp.replace(/^\D+/, "");
  }
  while (stackNumber.length > 1) {
    stackNumber.push(
      OPERATION_FUN[stackOperator.pop()](stackNumber.pop(), stackNumber.pop())
    );
  }
  return stackNumber[0];
};
// console.log('(3*(1+1))*2'.operation());
//

//2.用栈实现回文数判断

var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  const stak = [];
  const array = x.toString().split("");
  const length = Math.ceil(array.length / 2);
  const flag = array.length % 2 !== 0;
  for (let i = 0; i < length; ++i) {
    stak.push(array[i]);
  }
  flag && stak.pop();
  for (let i = length; i < array.length; ++i) {
    if (stak.pop() !== array[i]) return false;
  }
  return true;
};
function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    // Call stack overflow
    return 1;
  }
}

//console.log(computeMaxCallStackSize())

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  const { length } = nums;
  const queque = [];
  let sum = 0;
  for (let i = 0; i < k; ++i) {
    queque.push(nums[i]);
    sum += nums[i];
  }
  let first = { val: -Infinity, index: 0 };
  let second = { val: -Infinity, index: 0 };
  let third = { val: -Infinity, index: 0 };
  for (let i = 0, len = length - k; i < len; ++i) {
    if (sum > first.val) {
      third = second;
      second = first;
      first = { val: sum, index: i };
    } else if (sum > second) {
      third = second;
      second = { val: sum, index: i };
    } else if (sum > third) {
      third = { val: sum, index: i };
    }
    queque.push(nums[i]);
    sum += nums[i + k] - queque.pop();
  }
  if (sum > first.val) {
    third = second;
    second = first;
    first = { val: sum, index: length - k };
  } else if (sum > second) {
    third = second;
    second = { val: sum, index: length - k };
  } else if (sum > third) {
    third = { val: sum, index: length - k };
  }
  return [first.index, second.index, third.index].sort((a, b) => a - b);
};

maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1, 3], 3);
