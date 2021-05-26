import React, { useState } from 'react'

const Todo = () => {

    const imgMenu = 'https://source.unsplash.com/random';

    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);

    const inputElement = (event) =>
    {
        setInputData(event.target.value);
    }

    const addItem = () =>
    {
        if(!inputData){
            alert('Please Add Item Title Here...');    
        }
        else
        {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) =>{
        const updatedItems = items.filter((val,ind) =>{
            return ind != id;
        })
        setItems(updatedItems);
    }

    const removeAllItems = () => {
        alert('hieee');
        setItems([]);
    }

    return (
        <>
           <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={imgMenu} alt={imgMenu}/>
                        <figcaption>Add Your List Here ✌️</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items ..." value={inputData} onChange={inputElement} />
                        <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((val,ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{val}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() =>deleteItem(ind)}></i>
                                    </div>
                                );
                            })
                        }

                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAllItems}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>   
            </div>    
        </>
    )   
}

export default Todo