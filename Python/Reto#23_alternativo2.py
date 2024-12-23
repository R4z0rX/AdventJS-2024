def find_missing_numbers(nums):
    n = max(nums)
    full_set = set(range(1, n + 1))
    num_set = set(nums)
    missing_numbers = list(full_set - num_set)
    return missing_numbers
