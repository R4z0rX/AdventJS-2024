def draw_race(indices, length):
    c = []
    
    for i in range(len(indices)):
        c.append("~" * length)
        if indices[i] != 0:
            tmp = list(c[i])
            indices[i] > 0 and tmp[indices[i]] = "r" or tmp[length + indices[i]] = "r"
            c[i] = ''.join(tmp)
        c[i] = " " * (len(indices) - i - 1) + c[i] + " /" + str(i + 1)
        
    return "\n".join(c)
