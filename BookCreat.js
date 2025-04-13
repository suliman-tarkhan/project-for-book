import { useState } from "react"
function BookCreat({onCreate}){
    const [title,setTitle]=useState('')
     const handleChange=(event)=>{
        setTitle(event.target.value)
     }
      
        const handleSubmit = (event) => {
            event.preventDefault(); // منع إعادة تحميل الصفحة
        
        onCreate(title)
        // setTitel(' ')
     }

    return  (
        <div className=" book-create"> 
        <h3> Add a Book </h3>
            <form onSubmit={handleSubmit}>
                <label>title </label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button"> create  </button>
            </form>

        </div>

    )
}
export default BookCreat