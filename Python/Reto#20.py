from collections import Counter
from typing import List, Dict, Tuple

def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    def difference(a, b):
        b_count = Counter(b)
        return [v for v in a if not b_count[v] or not b_count.subtract([v])]
    
    diff1 = difference(expected, received)
    diff2 = difference(received, expected)
    
    missing = Counter(diff1)
    extra = Counter(diff2)
    
    return {
        'missing': dict(missing),
        'extra': dict(extra)
    }
