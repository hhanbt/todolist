import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from "react-icons/go"
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        //     removeTodo: (id) => dispatch(removeTodos(id)),
        //     updateTodo: (obj) => dispatch(updateTodos(obj)),
        //     completeTodo: (id) => dispatch(completeTodos(id)),
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState(" ");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            add();
        }
    }

    const add = () => {
        if (todo === " ") {
            alert("Input is empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            })
            setTodo(" ");
        }
    }
    // console.log("props from store:", props);
    return (
        <div className='addTodos'>
            <input
                type='text'
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyPress(e)}
                className='todo-input'
                value={todo}
            />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='add-btn'
                onClick={() => add()}
            >
                <GoPlus />
            </motion.button>
            <br />
        </div>
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
