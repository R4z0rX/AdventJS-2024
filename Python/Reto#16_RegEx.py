def remove_snow(s):
    import re
    
    regex = re.compile(r"(.)\1")
    
    while regex.search(s):
        s = regex.sub("", s)
    
    return s
