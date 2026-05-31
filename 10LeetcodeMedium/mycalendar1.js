class Tree {
    constructor(start, end) {
        this.start = start
        this.end = end
        this.left = null
        this.right = null
    }

    insert(start, end) {
        if (start >= this.end) {
            // New event starts after current node ends -> go right
            if (!this.right) {
                this.right = new Tree(start, end)
                return true
            }
            return this.right.insert(start, end)
        } else if (end <= this.start) {
            // New event ends before current node starts -> go left
            if (!this.left) {
                this.left = new Tree(start, end) 
                return true
            }
            return this.left.insert(start, end)
        } else {
            // overlap detected
            return false
        }
    }
}

var MyCalendar = function() {
    this.root = null
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    if (!this.root) {
        this.root = new Tree(startTime, endTime)
        return true
    }
    return this.root.insert(startTime, endTime)
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */