import random as random
import turtle as turtle
wn = turtle.Screen()
wn.bgcolor('lightblue')
odysseus = turtle.Turtle()
achilles = turtle.Turtle()
odysseus.color('blue')
achilles.color('red')
odysseus.shape('turtle')
achilles.shape('turtle')
achilles.up()
achilles.left(90)
achilles.forward(20)
achilles.right(90)
for lap in range(3):
    achilles.forward(random.randrange(1,20)
    odysseus.forward(random.randrange(1,20)

wn.exitonclick()