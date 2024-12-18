def find_in_agenda(agenda: str, phone: str) -> dict | None:
    res = None
    c = 0

    for i in agenda.split("\n"):
        if phone in i:
            ph = i[i.index("+"):i.index("+") + 15].strip()
            name = i[i.index("<") + 1:i.index(">")]
            addr = i.replace(ph, "").replace(name, "").replace("<>", "").strip()
            res = {"name": name, "address": addr}
            c += 1

    if c != 1:
        return None

    return res
