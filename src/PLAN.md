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

# Feature: Display Developers

STEPS:

- X hardcode state
- X Create component
- Get selector to run
  - X Build a selector (export it)
  - X Import the selector
  - X Use selector in component
- X gather data (console.log state)
- X Return data from the selector
- X map over the array of developers in your component

# Feature: Display all resources and their websites

- X hardcode state
- X Create component
- Get selector to run
  - X Build a selector (export it)
  - X Import the selector
  - X Use selector in component
- X gather data (console.log state)
- X Return data from the selector
- X map over the array of developers in your component

# Feature: Display 1 developer with their details

- name & website
- X Check state, do we have the data? if not hardcode it
- X Make a component to display 1 developer
- Get a selector to run
  - X Build a selector (export it)
  - X Import the selector
  - X Use selector in component
- X gather data (console.log state)
  - X We need an id of which developer to display
- X Return data from the selector
- X Display that 1 developer
- Make the user be able choose (make the data dynamic)
  - Make a select input etc..

WHAT DO WE NEED TO DO, TO MAKE A SELECT INPUT WITH DEVELOPER ID's?

- X Making a select input
- X Harcode an option
- Dynamic options
  - X We need data for developers
  - X Make a selector for developers and use it (or **reuse** one)
  - X Map over developers to create the options
- Listen to what the user selected and get and Id
  - Onchange listener
  - Store which id the user wants to see using useState
  - An event handler
- Pass the id the user selected to our selectDeveloperById (so everything is dynamic)

# Feature: Add a developer

WHAT DO WE NEED TO DO TO BE ABLE TO ADD A DEVELOPER?

- X We need a form
- X We need to store the state of the form (useState)
- X When the form is submitted, dispatch an action
- In the reducer, handle the action

# Feature: Add a resource

WHAT DO WE NEED TO DO TO BE ABLE TO ADD A DEVELOPER?

- X We need a form
- X We need to store the state of the form (useState)
- X When the form is submitted, dispatch an action
- X In the reducer, handle the action

# Feature: Delete a developer

WHAT DO WE NEED TO DO TO BE ABLE TO DELETE A DEVELOPER

- X Data of who to delete -> id of the developer
- X We need some UI (button or something) to delete someone
- X Wire the UI (event listeners and handlers)
- X Create an action
- X Dispatch that action
- handle action in reducer
- ... -> delete them from the array of developers?? (what do we use)
- Ask for confirmation?

# Fetching from api

WHAT DO WE NEED TO DO, TO FETCH DEVELOPERS / RESOURCES?

- X install **axios** / request library / use fetch
- X import axios
- X make a request with axios,
- X dispatch an action (with developers / resources as a payload)
- store the response -> in the reduxState

- import axios
- make a request with axios,
- dispatch an action resources as a payload
- store the response -> in the reduxState

# TAKE AWAY:

SELECTORS

- Logic about what data a component needs to function

ACTION CREATORS

- If you have logic about what the user did, it belongs in an actioncreator

COMPONENTS

- If you have logic of how to display something (buttons / yes no)
- how to interact with the user

REDUCER

- If you have logic of how a user changes the data in your app

# Later, Day 3

- Routing together with redux
- Fetching data from an api together with redux
- Explain: what are `thunks`
- Thunks, y tho...

# Later, later Day 4

- Sign up / Login
- post requests
