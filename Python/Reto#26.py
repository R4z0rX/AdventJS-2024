def get_completed(time_worked: str, total_time: str) -> str:
    def time_to_seconds(time_string):
        hours, minutes, seconds = map(int, time_string.split(':'))
        return hours * 3600 + minutes * 60 + seconds

    a = time_to_seconds(time_worked)
    b = time_to_seconds(total_time)
    return f"{round((a / b) * 100)}%"
