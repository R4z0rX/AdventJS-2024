def organize_shoes(shoes):
  organized_shoes = {}
  for shoe in shoes:
    if shoe['size'] not in organized_shoes:
      organized_shoes[shoe['size']] = {'I': 0, 'R': 0}
    organized_shoes[shoe['size']][shoe['type']] += 1
  available = []
  for size, counts in organized_shoes.items():
    left_shoes = counts['I']
    right_shoes = counts['R']
    pairs = min(left_shoes, right_shoes)
    for _ in range(pairs):
      available.append(int(size))
  return available
