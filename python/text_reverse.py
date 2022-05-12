def reverse(text):
  descend = len(text)-1
  while descend >= 0:
    print(text[descend]),
    descend -= 1

reverse("Python!")