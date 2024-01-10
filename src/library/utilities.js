// function will take an event, state, setter,
export const handleInput = (event, state, setter) => {
    setter({ ...state, [event.target.name]: event.target.value })
}