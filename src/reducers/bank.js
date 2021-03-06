export default (state = 0, action) => {
  switch (action.type) {
    case "enter":
      return action.bank

    case "leave":
      return 0

    case "bet":
    case "double":
    case "split":
      return state - action.bets

    case "finish":
      return state + action.amount

    default:
      return state
  }
}
