 import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConections } from '../utils/connectionsSlice'
 
 const Connections = () => {
    const connections = useSelector((store) => store.connection)
    const dispatch = useDispatch();
    const fetchConnections = async() =>{
        try{
            const res = await axios.get(BASE_URL + "/user/connections", {withCredentials:true})
            console.log(res.data.data);
            dispatch(addConections(res.data.data))
        }catch(err){

        }
    }
    useEffect(()=>{
        fetchConnections()
    },[])

    if(!connections) return
    if(connections.length ===0) return <h1 className='font-bold text-2xl'>No Connections found</h1>
   return (
     <div className='text-center my-10'>
       <h1 className='font-bold text-4xl'>Connections</h1>
        {connections.map(connection =>{
            const{firstName, lastName, photoUrl, age, gender, about, skills} = connection
            return(
            <div className=' flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
                <div>
                    <img alt='photo' src={photoUrl} className='w-30 h-20 rounded-full'></img>
                </div>
                <div className='text-left mx-4 '>
                    <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                    <p>{about}</p>
                    {age && gender && <p>{age + " " + gender}</p>}
                    <p>{about}</p> 
                </div>
                 
            </div>
        )})}
     </div>
   )
 }
 
 export default Connections
 