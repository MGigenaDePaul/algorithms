// Leetcode 208
class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root

    for (const c of word) {
        if (!(c in cur.children)) {
            cur.children[c] = new TrieNode()
        }
        cur = cur.children[c]
    }
    cur.endOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root

    for (const c of word) {
        if (!(c in cur.children)) {
            return false
        }
        cur = cur.children[c]
    }
    return cur.endOfWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root

    for (const c of prefix) {
        if (!(c in cur.children)) {
            return false
        }
        cur = cur.children[c]
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */