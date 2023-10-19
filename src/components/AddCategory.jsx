import { useState } from "react"
// import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('One punch');
    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // onNewCategory(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());

        setinputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="buscar gifs" value={inputValue}
                onChange={onInputChange}
            ></input>
        </form>
    )

}


