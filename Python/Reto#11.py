def decode_filename(filename: str) -> str:
    import re

    match = re.match(r"^\d+_(.+\.[a-zA-Z0-9]+)\.", filename)

    return match.group(1) if match else ""
