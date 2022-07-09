# Receives time of day and amount of hours to calculate time using very simple exception handling 

inputTime = input("What time is it? In hours only (0 - 23)\n")

try:
  inputTime = int(inputTime)
except: 
  inputTime = input("Please enter the number of hours only, no spaces.\n")
finally:
  inputTime = int(inputTime)

inputPeriod = input("How long until your alarm goes off? Please insert number of hours only\n")

try:
  inputPeriod = int(inputPeriod)
except: 
  inputPeriod = input("Please enter the number of amount of hours only, no spaces.\n")
finally: 
  inputTime = int(inputTime)

def hourCalculator(time, period):
  sum = time + period
  print(sum)
  if sum > 24:
    return sum % 24
  else:
    return sum 

targetTime = hourCalculator(inputTime, inputPeriod)

print("You'll wait until " + str(targetTime) + ":00")