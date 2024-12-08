def create_xmas_tree(height, ornament):
    s = ""
    for i in range(height):
        sp = "_" * i
        s = sp + ornament * (1 + (height - i - 1) * 2) + sp + "\n" + s
    sp = "_" * (height - 1)
    b = sp + "#" + sp
    s += b + "\n" + b
    return s
