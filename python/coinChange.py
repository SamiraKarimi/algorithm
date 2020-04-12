# Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents),dimes (10 cents), and quarters (25 cents).

# If the amount of cents was 33, you would return:

# Calling generateCoinChange(33) should return this output: { "Q" : 1, "D" : 0, "N" : 1, "P" : 3 }

# There are MANY ways to do this algo! Try more than one!

def generateCoinChange(cents):
    change = {
        "Q" : 0,
        "D" : 0,
        "N" : 0,
        "P" : 0
    }
    change["Q"] = int(cents / 25)
    cents = cents % 25
    change["D"] = int(cents / 10)
    cents = cents % 10
    change["N"] = int(cents / 5)
    cents = cents % 5
    change["P"] = cents
    return f"Quarters are {change}"

result = generateCoinChange(77)
print(result)