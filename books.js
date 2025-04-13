import axios from "axios";
import { createContext, useState } from "react";
const BooksContext=createContext()
function Provider({children}){
    const[books,setBooks]=useState([])
    const fetchBooks=async()=>{
        const respons=await axios.get('http://localhost/books')
        setBooks(respons.data)
    }


    const editBookById=(id,newTitle)=>{
        const updatedBook=books.map((book)=>{
          if (book.id===id){
            return{ ...books,newTitle}
          }
          return book
        }
      )
    setBooks(updatedBook)
      }
      
      const deleteBookById=(id)=>{
        const updatedBook=books.filter((book)=>{
          return book.id!==id
    
        })
        setBooks(updatedBook)
    
      }
      const createBook =  async (title) => {
        const respons =await axios.post('http://localhost:3001/books',title)
        console.log(respons)
         const updatedBook=[...books,
          {id:Math.round(Math.random()*999),title}]
          setBooks(updatedBook)
      };
    
    const [count,setCount]=useState(5)
    const valueToShare={
        count,
        incrementCount:()=>{
            setCount(count+1)
        }
    };
    return(
        <BooksContext.Provider value={valueToShare}>
        {children}
        </ BooksContext.Provider>
    )
}
export{Provider}
export default BooksContext