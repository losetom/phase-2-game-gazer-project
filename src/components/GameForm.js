import React, { useState } from 'react'

function Form() {
    const initState = {
        name: "",
        image: "",
        type: "",
}
// formData is a state variable

const [formData, setFormData] = useState(initState)

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/gameData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(newGame => console.log(newGame))

}       
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">NAME</label>
            <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="image">IMAGE</label>
            <input name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="type">TYPE</label>
            <input name="type" value={formData.type} onChange={handleChange} />
        </div>
        <button>Submit</button>
    </form>
   
  )
}

export default Form;