def find_missing_numbers(nums):
    n = max(nums)
    missing_numbers = [i for i in range(1, n + 1) if i not in nums]
    return missing_numbers
