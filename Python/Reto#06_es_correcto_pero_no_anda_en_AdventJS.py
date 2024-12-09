def in_box(box):
  r = False
  for s in box[1:-1]:
    if "*" in s:
      if s.startswith("#") and s.endswith("#"):
        r = True
        break
  return r
