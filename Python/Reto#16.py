def remove_snow(s: str) -> str:
    r = list(s)
    i = 1
    while i < len(r):
        if r[i] == r[i - 1]:
            del r[i - 1:i + 1]
            i = 1
        else:
            i += 1
    return ''.join(r)
