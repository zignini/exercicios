import turtle
wn = turtle.Screen()
triangle = turtle.Turtle()
triangle.color('red')
square = turtle.Turtle()
square.color('green')
hexagon = turtle.Turtle()
hexagon.color('yellow')
octagon = turtle.Turtle()
octagon.color('blue')
for side in range(3):
    octagon.forward(50)
    octagon.left(45)
    hexagon.forward(40)
    hexagon.left(60)
    square.forward(30)
    square.left(90)
    triangle.forward(20)
    triangle.left(120)

octagon.forward(50)
octagon.left(45)
hexagon.forward(40)
hexagon.left(60)
square.forward(30)
square.left(90)

for side in range(2):
    octagon.forward(50)
    octagon.left(45)
    hexagon.forward(40)
    hexagon.left(60)

for side in range(2):
    octagon.forward(50)
    octagon.left(45)
