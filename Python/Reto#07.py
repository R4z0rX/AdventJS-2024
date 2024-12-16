def fix_packages(packages):
    sorted_packages = packages

    while "(" in sorted_packages:
        start_idx = sorted_packages.rfind("(")
        end_idx = sorted_packages.find(")", start_idx)
        tmp = sorted_packages[start_idx : end_idx + 1]
        reverse = tmp[1:-1][::-1]
        sorted_packages = sorted_packages.replace(tmp, reverse)

    return sorted_packages
