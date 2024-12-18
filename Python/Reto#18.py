def find_in_agenda(agenda: str, phone: str) -> dict | None:
    res = None
    c = 0
    a = agenda.split("\n")

    for i in a:
        if phone in i:
            ph = i[i.index("+"):i.index("+") + 15].strip()
            s = i.replace(ph, "")
            name = i[i.index("<") + 1:i.index(">")]
            addr = s.replace(name, "").replace("<>", "").strip()
            res = {"name": name, "address": addr}
            c += 1

    if c != 1:
        return None

    return res

    return res
