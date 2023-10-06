import { create } from "zustand";
const useliststore=create((set)=>({
    comments : [
        {
          username: "paul",
          comment: "Consider using meaningful variable names to improve code readability."
        },
        {
          username:"sam" ,
          comment: "Make sure to modularize your code for easier maintenance and reusability."
        },
        {
          username: "horna",
          comment: "Practice problem-solving regularly to enhance your algorithmic thinking and coding skills."
        },
        {
          username: "patrick bateman",
          comment: "Learn and apply design patterns to write efficient and maintainable code."
        },
        {
          username: "bruce wayne",
          comment: "Always handle errors and edge cases gracefully to ensure robustness of your code."
        }
      ],
    doubts:[
        {
          "text": "how to delete a item at specific index",
          "body": "this problem is a test problem"
        },
        {
          "text": "how to remove duplicate elements from an array",
          "body": "I need to find a way to remove duplicates from an array efficiently."
        },
        {
          "text": "how to sort an array in ascending order",
          "body": "I'm trying to organize the elements in an array in ascending order. What's the best approach?"
        },
        {
          "text": "Doubt 4",
          "body": "Body for Doubt 4"
        },
        {
          "text": "how to make 2d array in cpp",
          "body": "Body for Doubt 5"
        }
      ],
      adddoubt:(text,body)=>{
        set((store)=>({
            doubts:[...store.doubts,{text,body}]
        }))
      },
      addcomment:(username,comment)=>{
        set((store)=>({
            comments:[...store.comments,{username,comment}]
        }))
      }
}))
export default useliststore;

  
 
  