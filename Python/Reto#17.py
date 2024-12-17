def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    rows, cols = len(grid), len(grid[0])
    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),          (0, 1),
        (1, -1), (1, 0), (1, 1)
    ]

    def count_adjacent_bombs(r, c):
        count = 0
        for dr, dc in directions:
            nr, nc = r + dr, c + dc

            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc]:
                count += 1
        return count

    result = [[0] * cols for _ in range(rows)]

    for r in range(rows):
        for c in range(cols):
            result[r][c] = count_adjacent_bombs(r, c)

    return result
