import turtle
sides = int(input("How many sides do you want your polygon?"))
angle = 360 / sides
size = int(input("And how big do you want the side of your polygon?"))
color = input("And what color do you want your polygon?")

wn = turtle.Screen()
polygon = turtle.Turtle()
polygon.color(color)
for each in range(sides):
    polygon.forward(size)
    polygon.left(angle)

wn.exitonclick()