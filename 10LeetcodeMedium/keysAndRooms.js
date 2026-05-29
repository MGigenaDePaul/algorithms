/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set()

    const dfs = (room) => {
        visited.add(room)
        for (const key of rooms[room]) {
            if (!visited.has(key)) {
                dfs(key)
            }
        }
    }
    dfs(0)

    return visited.size === rooms.length
}; 