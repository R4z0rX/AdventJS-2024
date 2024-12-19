def distribute_weight(weight: int) -> str:
    box_representations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }
    boxes = []
    remaining = weight

    while remaining > 0:
        box_weight = next(w for w in [10, 5, 2, 1] if w <= remaining)
        bottom, *rest = reversed(box_representations[box_weight])
        last = boxes.pop(0) if boxes else None
        new_bottom = f"{bottom}{last[len(bottom):-1] if last else ''}'"
        boxes[0:0] = reversed([new_bottom, *rest])
        remaining -= box_weight

    return '\n'.join(boxes)
