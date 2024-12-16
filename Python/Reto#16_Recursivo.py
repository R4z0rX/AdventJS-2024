def remove_snow(s: str) -> str:
    def f(s):
        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                return f(s[:i - 1] + s[i + 1:])
        return s
    return f(s)
