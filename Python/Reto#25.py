def execute(code: str) -> int:
    result = 0
    idx = 0
    ret = 0

    def increment_result():
        nonlocal result
        result += 1

    def decrement_result():
        nonlocal result
        result -= 1

    def jump_forward():
        nonlocal idx, ret, result
        if result == 0:
            idx = code[idx:].index("]") + idx
        else:
            ret = idx - 1

    def jump_backward():
        nonlocal idx, ret
        idx = ret

    def skip_forward():
        nonlocal idx
        if result == 0:
            idx = code[idx:].index("}") + idx

    instSet = {
        ">": lambda: None,
        "+": increment_result,
        "-": decrement_result,
        "[": jump_forward,
        "]": jump_backward,
        "{": skip_forward,
        "}": lambda: None
    }

    while idx < len(code):
        op = code[idx]
        if op in instSet:
            instSet[op]()
        idx += 1

    return result
