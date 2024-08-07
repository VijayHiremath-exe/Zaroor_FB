import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Groceries = () => {

    const [data, getData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('hello');
                const collection = await axios.get('http://localhost:3001/groceries');
                console.log(collection.data);
                getData(collection.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

  return (
    <div>
        {data.map((item, index)=>{
            return (
                <div key={index}> 
                    <h1>{item.name}</h1>
                    <h2>{item.category}</h2>
                    <h2>{item.price}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Groceries