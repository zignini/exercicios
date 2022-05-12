def anti_vowel(text):
  for i in text:
    if i.upper() == "A" or i.upper() == "E" or i.upper() == "I" \
    or i.upper() == "O" or i.upper() == "U":    
      i = ""
  return text

anti_vowel("Python")
