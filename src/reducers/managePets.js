export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {...state, pets: [...state.pets, action.pet]};
    case "REMOVE_PET":
      return {...state, pets: state.pets.filter(pet => pet.id !== action.id)};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  const container = document.getElementById('container')

  const list = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  })

  container.innerHTML = `<ul>${list}</ul>`
}
