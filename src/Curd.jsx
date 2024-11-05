

import React, { useState } from "react";

function Crud() {
    const [itemData, setitemData] = useState({ name: '', discription: '' });
    const [items, setitems] = useState([]);
    const [isediting, setediting] = useState(false);
    const [edititemid, setedititemid] = useState(null);
   
    const handlechange = (e) => {
        const { name, value } = e.target;
        setitemData({ ...itemData, [name]: value });
    };

    const handlesubmision = (e) => {
        e.preventDefault();
        if (isediting) {
            setitems(items.map(item => (item.id === edititemid ? { ...item, ...itemData } : item)));
            setediting(false);
            setedititemid(null);
        } else {
            setitems([...items, { ...itemData, id: Date.now() }]);
        }
        setitemData({ name: '', discription: '' });
    };

    const edititem = (item) => {
        setitemData({ name: item.name, discription: item.discription });
        setediting(true);
        setedititemid(item.id);
    };

    const deleteitem = (id) => {
        setitems(items.filter(item => item.id !== id));
    };
    
    return (
        <div>
            <h1>CRUD Operations</h1>
            <form onSubmit={handlesubmision}>

       

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={itemData.name}
                    onChange={handlechange}
                    required
                />
                <input
                    type="text"
                    name="discription"
                    placeholder="Description"
                    value={itemData.discription}
                    onChange={handlechange}
                    required
                />
                <button type="submit">{isediting ? 'Update' : 'Add'}</button>
            </form>
            <div>
                <h2>Items</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} : {item.discription}</span>
                            <button onClick={() => edititem(item)}>Edit</button>
                            <button onClick={() => deleteitem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Crud
