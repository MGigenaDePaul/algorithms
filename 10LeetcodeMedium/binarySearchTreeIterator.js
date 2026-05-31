var BSTIterator = function(root) {
    this.stack = [];
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};

BSTIterator.prototype.next = function() {
    const res = this.stack.pop();
    let cur = res.right;
    while (cur) {
        this.stack.push(cur);
        cur = cur.left;
    }
    return res.val;
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};