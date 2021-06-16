import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import './todo.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main_div">
                <div className="child-div">
                    <label className="head">Add Your List Here</label>

                    <div className="additems">
                        <input type="text" placeholder="✍️ Add Items.."
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}> </i>
                    </div>

                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id} >
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id)
                                            )}></i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div className="showItems">
                        <button
                        onClick={() =>dispatch(removeTodo())}
                        >Delete List</button>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Todo;
