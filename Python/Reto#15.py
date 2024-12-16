def draw_table(data: list[dict[str, str | int]]) -> str:
    columns = list(data[0].keys())
    column_widths = [
        max(len(column), *[len(str(item[column])) for item in data])
        for column in columns
    ]

    separator = (
        lambda: "+" + "+".join(["-" * (width + 2) for width in column_widths]) + "+"
    )
    row = (
        lambda item: "|"
        + " |".join(
            [
                " " + str(item.get(column, "")).ljust(width)
                for column, width in zip(columns, column_widths)
            ]
        )
        + " |"
    )

    table = separator() + "\n"
    table += (
        "| "
        + " | ".join(
            [
                column.capitalize().ljust(width)
                for column, width in zip(columns, column_widths)
            ]
        )
        + " |\n"
    )
    table += separator() + "\n"

    for item in data:
        table += row(item) + "\n"
    table += separator()

    return table
