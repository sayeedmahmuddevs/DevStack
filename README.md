# DevStack Web App
A modern and useer-friendly for developers to explore technologies, tools and resource

## Technologies Used 
- React
- TypeScript
- Tailwind 

## Features 

## 1. Explore Technologies
Brows defference technologies with usefull information 

## 2. Add & Remove from stock
User can add and remove technologies are added or removed

## Mobile Responsive Design
The website is fully responsive mobile, table and desktop device

# Assignemnt Question
## 1. What is JSX, and why is it used in React?
The full form of JSX is JavaScript XML; it essentially allows you to write code within JavaScript that looks very much like HTML. Using it makes React code much easier to read and write, while also enabling the inclusion of JavaScript logic.

## 2. What is the difference between props and state?
In React, props are read-only and cannot be modified; they allow data to be passed from parent to child, but not the other way around. State, on the other hand, allows for data modification and storage.

# 3 What does the `useState` hook do, and where did you use it in this project?
”useStack” is a React hook used for storing and updating data. I am using it in my project to add data to the stack and to include a boolean value indicating whether it is active.

# 4 What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to execute side effects after a component renders. However, I didn't use it in this project because I haven't fully practiced `useEffect` yet; instead, I used `useState`.

# 5   5. Why does every item in a `.map()` list need a unique `key` prop?
When rendering multiple components or items using `map`, React uses a `key` to identify each item.

# 6 What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering involves hiding or showing a component based on a condition. Here is an example from my project:

{data.isAdd ? (
            <div>
              <MdOutlineDone />
              Added to Stock
            </div>
          ) : (
            "Add to Stock"
          )}

if stock.isAdd === true ? it showing "Added to Stock" otherwise, Add to Stock 

# 7 How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
In React, props are used to pass data from a parent to a child; conversely, to send data from a child back to the parent, a function is passed down as a prop, enabling easy data transmission to the parent—a technique I have already utilized many times.

