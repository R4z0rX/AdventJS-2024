def find_missing_numbers(nums):
    n = max(nums)
    num_set = set(nums)
    missing_numbers = [i for i in range(1, n + 1) if i not in num_set]
    return missing_numbers
