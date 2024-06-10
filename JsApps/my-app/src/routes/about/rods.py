rods = 0
pillars = 0
profit = 45000
pillarsf = 0
rodsf = 0
for rods in range(0,38):
    pillars = 70 - 2*rods 
    drilling = 0.5*rods + 1.5*pillars -105
    grinding = rods + pillars - 110
    if drilling < 0:
        drilling = 0
    if grinding < 0:
        grinding = 0
    profitCheck = 300*rods +600*pillars -80*drilling -150*grinding
    print (drilling,grinding)
    if profitCheck > profit:
        profit = profitCheck
        pillarsf = pillars
        rodsf = rods

print (pillarsf,rodsf,profit)