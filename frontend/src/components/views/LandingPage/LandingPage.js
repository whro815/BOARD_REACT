import React,{ useEffect } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../_actions/user_action';
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

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const onClickHandler = () =>{
        dispatch(logoutUser())
        .then(res => {
          console.log('res.payload.logoutSuccess ='+ res.payload.logoutSuccess)
            if( res.payload.logoutSuccess ){
                navigate('/login');
            } else {
                alert('logout Error');
            }
        })
    }

    return (
        <div style={{
                display:'flex'
                , width:'100%'
                , height:'100vh'
                , justifyContent:'center'
                , alignItems:'center'
            }}>
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage;