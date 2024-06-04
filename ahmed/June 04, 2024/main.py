age = int(input("Enter your age: "))

if age < 0:
    print("You are lying! It's impossible...")
elif age < 18:
    print("You are a baby. You can't use this website.")
elif age < 60:
    print("You are allowed to use this website.")
elif age < 120:
    print("You are too old to use this website.")
else:
    print("Ну если у вас такой возраст, вы давно умерли!")
