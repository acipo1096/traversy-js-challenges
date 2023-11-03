// Brad Solution

function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
    console.log(totalMileage)

    const averageMileage = totalMileage / cars.length
    console.log(averageMileage)

    const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest), cars[0])
    console.log(highestMileageCar)

    const lowestMileageCar = cars.reduce((lowest, car) => (car.mileage < lowest.mileage ? car : lowest), cars[0])
    console.log(lowestMileageCar)

    return {
        averageMileage: parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}

module.exports = analyzeCarMileage;
