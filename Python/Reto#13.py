def is_robot_back(moves: str) -> bool | list[int]:
    newmoves = ""
    i = x = y = 0
    changes = {"U": "D", "D": "U", "R": "L", "L": "R"}
    while i < len(moves):
        move = moves[i]
        if move == "*":
            newmoves += moves[i + 1]
        elif move == "!":
            tmp = moves[i + 1]
            newmoves += changes[tmp]
            i += 1
        else:
            newmoves += move
        i += 1
    while "?" in newmoves:
        idx = newmoves.index("?")
        v = newmoves[idx:idx + 2]
        tmp = newmoves[:idx]
        if v[1] not in tmp:
            newmoves = newmoves.replace(v, v[1])
        else:
            newmoves = newmoves.replace(v, "")
    for m in newmoves:
        match m:
            case "R": y += 1
            case "L": y -= 1
            case "U": x += 1
            case "D": x -= 1
    return x == 0 and y == 0 or [y, x]
