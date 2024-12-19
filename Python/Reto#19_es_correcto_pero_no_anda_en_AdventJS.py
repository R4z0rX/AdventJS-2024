def distribute_weight(weight: int) -> str:
    box_representations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    box_weights = [10, 5, 2, 1]
    c = [0] * 4
    n = weight
    s = ""

    for i in range(len(box_weights)):
        c[i] = n // box_weights[i]
        n %= box_weights[i]
        box = "\n".join(box_representations[box_weights[i]])
        for j in range(c[i]):
            s = box + s[len(box_representations[box_weights[i]][-1]):].replace("_ ", "_")

    return s
