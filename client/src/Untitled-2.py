class Vehicle:
    def _init_(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price

    def show(self):
        print('Details:', self.brand, self.model, 'Price:', self.price)

    def max_speed(self):
        print('Vehicle max speed is 160')

    def gear_system(self):
        print('Vehicle has 6 shifter gearbox')

# inherit from vehicle class
class Car(Vehicle):
    def max_speed(self):
        print('Car max speed is 260')

    def gear_system(self):
        print('Car has Automatic Transmission')

# Car Object
car = Car('Audi', 'R8', 9000000)
car.show()
# call methods from Car class
car.max_speed()
car.gear_system()

# Vehicle Object
vehicle = Vehicle('Nissan', 'Magnite', 550000)
vehicle.show()
# call method from a Vehicle class
vehicle.max_speed()
vehicle.gear_system()