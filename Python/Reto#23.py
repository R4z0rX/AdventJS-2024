def find_missing_numbers(nums):
    max_num = max(nums)
    num_set = set(nums)
    missing_numbers = []
    
    for i in range(1, max_num + 1):
        if i not in num_set:
            missing_numbers.append(i)
    
    return missing_numbers
