def tree_height(tree):
    r = 0
    
    if tree and len(tree) != 0:
        left_height = tree_height(tree.get('left'))
        right_height = tree_height(tree.get('right'))
        r = max(left_height, right_height) + 1
    return r
