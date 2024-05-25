import React,{useState} from 'react'

export default function Search(props,{data}) {
   
    const [searchTerm, setSearchTerm] = useState('');
    //const [searchResults, setSearchResults] = useState([]);
    //const [loading, setLoading] = useState(false);
   
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        }
    const filteredData= data.filter(item => item.toLowerCase().include(searchTerm.toLowerCase()))

    
  return (
    <div>
         {props.icon}
        <input type="text" placeholder='Search...' value={searchTerm} onChange={handleChange}/>
        <ul>
            {filteredData.map((item, index) =>(
                <li key={index}>{item}</li>

            )) }
        </ul>
    </div>
   
  )
}
