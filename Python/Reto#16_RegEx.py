def remove_snow(s: str) -> str:
    import re
    
    regex = re.compile(r"(.)\1")
    
    while regex.search(s):
        s = regex.sub("", s)
    
    return s
