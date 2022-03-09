//1.用栈实现混合运算
const OPERATION = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '**': 3,
};
const OPERATION_FUN = {
    '+': (a, b) => {
        return parseFloat(b) + parseFloat(a);
    },
    '-': (a, b) => {
        return parseFloat(b) - parseFloat(a);
    },
    '*': (a, b) => {
        return parseFloat(b) * parseFloat(a);
    },
    '/': (a, b) => {
        return parseFloat(b) / parseFloat(a);
    },
    '**': (a, b) => {
        return parseFloat(b) ** parseFloat(a);
    },
};

String.prototype.operation = function () {
    let value = this.valueOf();
    let temp = '';
    let flag = 0,
        start = 0;
    for (let i = 0, len = value.length; i < len; ++i) {
        if (value[i] === '(') {
            !flag && (start = i);
            ++flag;
        } else if (value[i] === ')') {
            --flag;
            !flag &&
                (temp =
                    temp +
                    String.prototype.operation.call(value.slice(start + 1, i)));
        } else if (!flag) {
            temp = temp + value[i];
        }
    }

    const stackNumber = [],
        stackOperator = [];
    while (temp !== '') {
        stackNumber.push(/^(\d|\.)+/.exec(temp)[0]);
        temp = temp.replace(/^(\d|\.)+/, '');
        if (temp === '') continue;
        const operation = /^\D+/.exec(temp)[0];
        if (
            stackOperator.length > 0 &&
            OPERATION[stackOperator[stackOperator.length - 1]] >=
                OPERATION[operation]
        ) {
            stackNumber.push(
                OPERATION_FUN[stackOperator.pop()](
                    stackNumber.pop(),
                    stackNumber.pop()
                )
            );
        }
        stackOperator.push(operation);
        temp = temp.replace(/^\D+/, '');
    }
    while (stackNumber.length > 1) {
        stackNumber.push(
            OPERATION_FUN[stackOperator.pop()](
                stackNumber.pop(),
                stackNumber.pop()
            )
        );
    }
    return stackNumber[0];
};
console.log('(3*(1+1))*2'.operation());
