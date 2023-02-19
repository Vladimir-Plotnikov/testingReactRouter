import { useState } from "react"
import { nanoid } from "nanoid";

export function InfoForms({ onSubmit }) {

    const [form, setForm] = useState({name:'', job:''})
    
    const handleNameChange = e => {
        const { name, value } = e.currentTarget;
        setForm(form => ({ ...form, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();

    const newInfo = {
            id: nanoid(),
            ...form,
        }

        onSubmit(newInfo)
        setForm({ name: '', job: '' })
    }

    return (
    <div>
    <form onSubmit={handleSubmit}>
        <input className='InputField' 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
            value={form.name}
                />
                <button type="submit">SUBMIT</button>
    </form>
    <form onSubmit={handleSubmit}>  
        <input className='InputField' 
            type="text"
            name="job"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
            value={form.job}
        />
        <button type="submit">SUBMIT2</button>
        
    </form>
    </div>
    )
}