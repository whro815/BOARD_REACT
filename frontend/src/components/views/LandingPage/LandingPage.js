import React,{ useEffect } from 'react';
import axios from "axios";

//  const [customers , setCustomers] = useState([]);

//   useEffect( async () =>{
//     await axios.get('/api')
//     .then((response)=>{
//       console.log(response.data);
//       setCustomers(response.data);
//     })
//   },[])

function LandingPage(){

    // useEffect( async () =>{ 
    //     await axios.get('/hello')
    //     .then( (res)=>{ console.log(res.data); } )
    // },[])

    return (
        <div style={{
                display:'flex'
                , width:'100%'
                , height:'100%'
                , justifyContent:'center'
                , alignItems:'center'
            }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage;