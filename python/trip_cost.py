# Creating a function that calls other functions that have conditions
def hotel_cost(nights):
  return 140 * nights


def plane_ride_cost(city):
  if city.lower() == "charlotte":
    return 183
  elif city.lower() == "tampa":
    return 220
  elif city.lower() == "pittsburgh":
    return 222
  elif city.lower() == "los angeles":
    return 475


def rental_car_cost(days):
  car_rental = days * 40
  if days >= 7:
    car_rental -= 50
  elif days >= 3:
    car_rental -= 20
  return car_rental


def trip_cost(city, days):
  return rental_car_cost(days) + hotel_cost(days - 1) + plane_ride_cost(city)
