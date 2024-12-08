def createFrame(names):
    l = [len(s) for s in names]
    li = l.index(max(l))
    ls = names[li]
    maxLen = len(ls) + 4
    r = "*"*maxLen + "\n"
    for e in names:
        i = maxLen - len(e) - 3
        r+= "* " + e + (" "*i) + "*\n"
    r += "*"*maxLen
    return r
