type Action = { type: "increment" } | { type: "decrement" };


function reducer(state: number, action:Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

let state = 0;

state = reducer(state, { type: "increment" });
state = reducer(state, { type: "increment" });
state = reducer(state, { type: "increment" });
state = reducer(state, { type: "decrement" });
console.log(state);