// TypeAheadDropDown.js
import '../../assets/css/TypeAhead.css';
import React from 'react';


export default function TypeAheadDropDown() {
 
    
    const [data, setData] = React.useState([])
    const [searchText, setSearchText] = React.useState('')
    const [suggestions, setSuggestions] = React.useState([])


    React.useEffect(() => {
        setTypeAheadData()

        return () => {
            setData([]) 
            setSearchText('')
            setSuggestions([])
        }
    }, [])

    const setTypeAheadData = () => {
        fetch('https://api.github.com/users', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((results) => {
                setData(results)
            })
    }
 
 
    const setSuggestionsData = (searched) =>{
        var suggestedData = []

        if(searched.length === 0 || searched === ' ' ){
            console.log('searched is empty..')
            setSuggestions(suggestedData)
        }else{
            
            data.map((user) => {
                if(user.login && user.login.toUpperCase().indexOf(searched.toUpperCase()) != -1) {
                    suggestedData.push(user)
                }
            })
            setSuggestions(suggestedData)
        }
        
    }
 
    const renderSuggestions = () => {
        
        if(suggestions.length === 0 && searchText.length !== 0) {
            return (
                <>
                    <p>User does not exist..</p>
                </>
            )
        }else if (suggestions.length === 0) {
            return null;
        }
        else {
            return (
                <>
                    <ul>
                        {suggestions.map(users => 
                        
                        <li key={users.id} onClick={(e)=>{
                            window.location.href = users.html_url
                        }}>
                            <img src={users.avatar_url}/>
                            <div className="details">
                                <h3>{users.login}</h3>
                                <p>{users.html_url}</p>
                            </div>
                        </li>)}
                    </ul>
                </>
            )
        }

        
    }
 
 
 return (
    <>
        <div className="TypeAheadDropDown">
            <input
            onChange={(e) => {
                setSearchText(e.target.value)
                setSuggestionsData(e.target.value)
            }} 
            placeholder="Search GitHub User from API" value={searchText} type="text" />
            {renderSuggestions()}
        </div>
    </>
 )
 
}
