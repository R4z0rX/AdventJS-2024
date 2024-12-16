def calculate_price(ornaments: str) -> int:
    prices = {"*": 1, "o": 5, "^": 10, "#": 50, "@": 100}

    s = list(ornaments)
    a = [prices[e] if e in prices else None for e in s]
    r = 0

    for i in range(len(a)):
        n = a[i + 1] if i < len(a) - 1 else 0
        if n == None:
            return None
        if a[i] < n:
            r -= a[i]
        else:
            r += a[i]

    return r
