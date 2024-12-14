def decode_filename(filename: str) -> str:
    parts = filename.split('_')
    if len(parts) < 2:
        return ''
    rest = '_'.join(parts[1:])
    dot_index = rest.find('.')
    if dot_index == -1:
        return ''
    return rest[:rest.find('.', dot_index + 1)]
