

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.size = 0;          // ✅ O(1) counter instead of Object.keys()
    this.cache = {};

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
};


LRUCache.prototype.remove = function(node) {
    const prev = node.prev;
    const nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
};

LRUCache.prototype.insert = function(node) {
    const prev = this.right.prev;
    const nxt = this.right;
    node.prev = prev;
    node.next = nxt;
    prev.next = node;
    nxt.prev = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.cache) {
        this.remove(this.cache[key]);
        this.insert(this.cache[key]);
        return this.cache[key].val;
    }
    return -1;
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.cache) {
        this.remove(this.cache[key]);
        this.size--;              // ✅ decrement before re-inserting
    }
    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);
    this.size++;                  // ✅ increment on every new insert

    if (this.size > this.cap) {
        const lru = this.left.next;
        this.remove(lru);
        delete this.cache[lru.key];
        this.size--;              // ✅ decrement on eviction
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */