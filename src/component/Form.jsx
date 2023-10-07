import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/style.css';


function Form({setInfo}) {
    const [city,setCity] = useState(""); 
    useEffect(() => {
      console.log(city);
    }, [city]);   
    
    const handleChange = async(e) => {
      e.preventDefault();
      const api = 'e8e388e026e2a44a351ecc9942c8d4c2';
      const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
      await axios.get(baseUrl).then(res =>setInfo(res.data));
    };

    
  return (
    <div>
      <h1>Hava durumu</h1>
      <form onSubmit={handleChange}>
        <div className='form'>
            <input onChange={(e) => setCity(e.target.value) }className='inputText' type='text' placeholder='Şehri Giriniz'/>
        </div>
        <div className="btnDiv">
            <button type='submit' className='btn'>Hava Durumunu Gör</button>
        </div>
      </form>
    </div>
  )
}
export default Form;
