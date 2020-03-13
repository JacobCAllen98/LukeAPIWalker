import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const SearchComponent = props => {
    const [ formState, setFormState] = useState({
        id: props.id,
        category: props.category
    });

    const [ responsedata, setResponseData] = useState([]);

    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        var newSearch = "https://swapi.co/api/"+formState.category+"/"+formState.id;
        axios.get(newSearch)
            .then(response=>{setResponseData(response.data)})
            .catch(err => console.log(err));
        var search = "/"+formState.category+"/"+formState.id;
        navigate(search);
    };

    useEffect(()=>{
        var newSearch = "https://swapi.co/api/"+formState.category+"/"+formState.id;
        axios.get(newSearch)
            .then(response=>{setResponseData(response.data)})
            .catch(err => {
                console.log(err);
                alert("These are not the droids you are looking for");
            });
    }, []);

    return (
        <div>
            <h1>Star Wars API browser!!!!!</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Search For: </label>
                <select name="category" onChange={onChangeHandler}>
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
            {Object.keys(responsedata).map((item) =>
            <p>{item} {responsedata[item]}</p>
            )}
        </div>
    )
}

export default SearchComponent;