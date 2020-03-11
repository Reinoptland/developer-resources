# Starting today:

- Small recap of what we know
- POST IN CHAT, what do you know about redux

  - Redux, y tho

    - not passing all the props, just get acces to the state anywhere
    - Seperating concerns, split up logic of your app (in files)
      - Components -> display stuff
      - Reducer -> change state from one state to the next
      - Selectors -> select specific part of the state to use in your component
      - Actions -> What did the user do?

  - How to Redux (strategy)
    - Go with the Flow
      1. Harcode the state
      2. Make a selector & a component
      3. Render the state in your component
      4. Add user interactions (event listeners & handlers)
      5. Dispatch action
      6. Handle action in the reducer
  - Redux Devtools
    - Check the state
    - Check if an action was dispatched
    - Check if the action changed the state
  - Provider -> Makes the Store available to our app
  - Store
    - Reducers
      - function, state + action -> state, (often with switch statement)
      - no mutation, reducer should be a pure function (ideally)
        - [...state ]
        - { ...state }
      - Combinereducers -> have multiple reducers, so reducers remain small
      - Rootreducer
    - State
    - Dispatch Actions
      - const dispatch = useDispatch()
      - dispatch(action)
    - Action
      - Objects with
        - type: what action is it -> 'ADD_USER'
        - payload (optional): additional data to change the state (user object)
    - Selectors
      - useSelector(yourSelectorHere)
      - inline selectors
      - selectors in seperate files (you need to export & import them)
      - function that gets the state as a parameter
      - return a small piece of the state
      - selectDevelopers -> state -> return state.developers
      - Can contain a lot of logic, filtering, sorting etc.

* I will code in this example, commit each step & push
* Come up with some very simple features we can build ourselves and practice
  - DEMO: select all developer & display them
  - You do: select all resources & display them
  - DEMO: select a specific developer and display the details
  - You do: select a specific resource and display the details
  - DEMO: add a developer to the state
  - You do: add a resource to the state
  - DEMO: remove a developer from the state
  - You do: remove a resource from the state

# Later, Day 3

- Routing together with redux
- Fetching data from an api together with redux
- Explain: what are `thunks`
- Thunks, y tho...

# Later, later Day 4

- Sign up / Login
- post requests
