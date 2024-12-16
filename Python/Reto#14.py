def min_moves_to_stables(reindeer, stables):
    reindeer.sort()
    stables.sort()

    moves = 0

    for i in range(len(reindeer)):
        moves += abs(reindeer[i] - stables[i])

    return moves
