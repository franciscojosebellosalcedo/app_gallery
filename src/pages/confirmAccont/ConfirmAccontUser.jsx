import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { confirmAccotonUserRequest } from '../../api/apiAuth';

const ConfirmAccontUser = () => {
  const [alert,setAlert]=useState(null);
  const params=useParams();

  useEffect(()=>{
    const confirmAccontUser=async ()=>{
      const data=await confirmAccotonUserRequest(params.token);
      console.log(data);
      if(data.response===false){
        setAlert({type:1,message:data.message});
      }else{
        setAlert({type:1,message:data.message});
      }
    }
    confirmAccontUser();
  },[params.token]);


  return (
    <div className='confirm'>
      <section className='confirm__container'>
        <h1 className='confirm__logo'> <i class="uil uil-images icon"></i>App Gallery</h1>
        <h2 className='confirm__title'>Confirmación de cuenta de usuario</h2>
        {alert===null?"":<p style={{color:alert.type===1?"green":"red"}} className='confirm__message'>{alert.message}</p>}
      </section>
    </div>
  )
}

export default ConfirmAccontUser