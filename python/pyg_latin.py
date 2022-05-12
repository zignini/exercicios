pyg = 'ay'
# Suffix for Pyg Latin

original = input('Enter a word:')

if len(original) > 0 and original.isalpha():
    # Only accepts words (not empty and alpha). 
    # Else returns a message like a slap on the wrist.
    word = original.lower()
    first = word[0]
    rest = word[1:]
    new_word = rest + first + pyg
    print(new_word)
else:
    print("You must enter a word!")
    