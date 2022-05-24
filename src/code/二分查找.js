//简单二分查找
function bsearch(arr, value) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = start + ((end - start) >> 1);
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
//console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

//查找第一个值等于给定值的元素
function bsearchFirst(arr, value) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = start + ((end - start) >> 1);
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            if (mid === 0 || arr[mid - 1] !== value) {
                return mid;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
// console.log(bsearchFirst([1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9], 9));

//查找最后一个值等于给定值得元素
function bsearchLast(arr, value) {
    let start = 0,
        { length } = arr,
        end = length - 1;
    while (start <= end) {
        let mid = start + Math.ceil((end - start) / 2);
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            if (mid === length - 1 || arr[mid + 1] !== value) {
                return mid;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}
// console.log(bsearchLast([1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9], 2));

//查找第一个大于等于给定值的元素
function bsearchFirstGreaterThan(arr, value) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = start + ((end - start) >> 1);
        if (arr[mid] >= value) {
            if (mid === 0 || arr[mid - 1] < value) {
                return mid;
            } else {
                end = mid - 1;
            }
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

// console.log(bsearchFirstGreaterThan([1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9], 8))

//查找最后一个小于等于给定值的元素
function bsearchLastLessThan(arr, value) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.ceil((end - start) / 2);
        if (arr[mid] <= value) {
            if (mid === arr.length - 1 || arr[mid + 1] > value) {
                return mid;
            } else {
                start = mid + 1;
            }
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(bsearchLastLessThan([1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9], 7));

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    this.minStack.push(Math.min(x, this.min()));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const { stack, minStack } = this;
    if (!stack.length) return;
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const { stack } = this;
    if (!stack.length) return -1;
    return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    const { minStack } = this;
    if (!minStack.length) return -1;
    return minStack[minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
