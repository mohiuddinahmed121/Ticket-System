What is JSX, and why is it used?
Ans:JavaScript XML.Makes UI code readable,Easier to structure components,Looks like HTML but behaves like JavaScript,Allows dynamic rendering

What is the difference between State and Props?
Ans:Props: Passed from parent to child, Read-only (cannot modify inside child), Used for communication
State: Managed inside the component, Can change, Causes re-render when updated

What is the useState hook, and how does it work?
Ans: useState is a React Hook that lets functional components have state.
React stores the value internally
When setCount() runs:
React updates the value,
React re-renders the component.

How can you share state between components in React?
Ans: 1. Lift State Up
Move state to common parent.
2. Context API (For Deep Components)
Used when state needs to be global.
Example: theme, auth, user.
3. State Management Libraries
For large apps:
Redux,Zustand,Recoil
But don’t jump there too early.

How is event handling done in React?
Ans: React uses camelCase and functions.Passing Parameters
exmple: onClick={() => handleClick(id)}
