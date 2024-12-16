def create_xmas_tree(height, ornament):
    s = ""
    sp = ""
    b = ""
    
    for i in range(height):
        sp = "_" * i
        s = sp + ornament * (1 + (height - i - 1) * 2) + sp + "\n" + s
        print(s)
        
    sp = "_" * (height - 1)
    b = sp + chr(35) + sp
    s = s + b + "\n" + b
    
    return s
