let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
];

// Your code here
function getParkingLotState(parking) {
  let state = {
    totalSlots: 0,  // (cantidad total de puestos válidos)
    availableSlots: 0, // (puestos disponibles)
    occupiedSlots: 0 // (puestos ocupados)
  };
  for (let rows = 0; rows < parking.length; rows++) { //bucle que recorre las filas del parking
    for (let columns = 0; columns < parking[rows].length; columns++) { //bucle que recorre cada columna de las filas del parking

      if (parking[rows][columns] === 2) { // si tanto en las filas como en las columnas hay un 2, se suma 1 a puestos disponibles y 1 a puestos válidos
        state.availableSlots += 1
        state.totalSlots += 1
      } else if (parking[rows][columns] === 1) { // si tanto en las filas como en las columnas hay un 1, se suma 1 a puestos ocupados y 1 a puestos válidos
        state.occupiedSlots += 1
        state.totalSlots += 1
      }
    }
  }
  return state
}
console.log(getParkingLotState(parkingState));
