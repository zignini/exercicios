def censor(text, word):
  if word in text:
    split_text = text.split(word)
    censored_word = "*" * len(word)
    join_text = censored_word.join(split_text)
    return join_text