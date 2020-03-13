import React, { useState } from 'react';
import { navigate } from '@reach/router';


const HomeComponent = props => {

    const [ formState, setFormState] = useState({
        id: "",
        category: "people"
    });

    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        var search = "/"+formState.category+"/"+formState.id;
        navigate(search);
    };

    return (
        <div>
            <h1>Star Wars API browser!</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Search For: </label>
                <select name="category">
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                    <option value="starships">Starship</option>
                </select>
                <br/>
                <label>ID: </label>
                <input type="text" name="id" onChange={onChangeHandler}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default HomeComponent;
        