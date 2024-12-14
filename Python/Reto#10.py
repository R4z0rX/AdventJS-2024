def compile(instructions):
    registers = {}
    pointer = 0
    while pointer < len(instructions):
        parts = instructions[pointer].split()
        command = parts[0]
        arg1 = parts[1]
        arg2 = parts[2] if len(parts) > 2 else None
        if command == "MOV":
            value = registers.get(arg1, 0) if arg1.isalpha() else int(arg1)
            registers[arg2] = value
        elif command == "INC":
            registers[arg1] = registers.get(arg1, 0) + 1
        elif command == "DEC":
            registers[arg1] = registers.get(arg1, 0) - 1
        elif command == "JMP":
            if registers.get(arg1, 0) == 0:
                pointer = int(arg2) - 1
        pointer += 1
    return registers.get("A")
