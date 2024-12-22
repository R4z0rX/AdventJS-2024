from typing import List

def generate_gift_sets(gifts: List[str]) -> List[List[str]]:
    result = []
    
    def combine(current, index, size):
        if len(current) == size:
            result.append(current)
            return
        for i in range(index, len(gifts)):
            combine(current + [gifts[i]], i + 1, size)

    for size in range(1, len(gifts) + 1):
        combine([], 0, size)

    return result
