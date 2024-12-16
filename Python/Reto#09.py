from typing import List, Literal

def move_train(
    board: List[str], mov: Literal["U", "D", "R", "L"]
) -> Literal["none", "crash", "eat"]:
    def getPos(c):
        y = next((i for i, e in enumerate(board) if c in e), None)
        x = board[y].index(c) if y is not None else None
        return [x, y]

    def newPos(pos):
        moves = {
            "L": [pos[0] - 1, pos[1]],
            "R": [pos[0] + 1, pos[1]],
            "U": [pos[0], pos[1] - 1],
            "D": [pos[0], pos[1] + 1],
        }
        return moves[mov]

    lPos = getPos("@")
    nPos = newPos(lPos)

    if nPos[0] < 0 or nPos[1] < 0 or nPos[0] > len(board[0]) or nPos[1] > len(board):
        return "crash"
    result = {"�": "none", "*": "eat", "@": "crash", "o": "crash"}

    return result.get(board[nPos[1]][nPos[0]], "crash")
