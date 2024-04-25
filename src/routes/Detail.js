import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addItem } from "../store";


function Detail(props) {

    let {id} = useParams();
    let [탭, 탭변경] = useState(0);
    let dispatch = useDispatch()
 

    // useEffect -> 어려운 연산, 서버에서 데이터가져오는 작업, 타이머 등에 사용됨  
    useEffect(() => {
    }, )

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}</p>
                <button className="btn btn-danger" onClick={()=> {
                    dispatch(addItem(  {id : 1 , name : 'Red kint' , count : 1} ))
                }}>주문하기</button> 
            </div>
        </div>

    <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
            <Nav.Link onClick={()=> {
                탭변경(0)
            }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link onClick={()=>{
                탭변경(1)
            }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link  onClick={()=> {
                탭변경(2)
            }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab 탭={탭} />

   
    </div> 
    )
}

//if 문은 밖에서 사용 가능

function Tab(props){ 

    let [fade, setFade] = useState('');
    useEffect(()=>{
        setTimeout(()=>{
            setFade('end') }, 100)
        return()=>{
            setFade('')
        }
    }, [props.탭])

    if(props.탭 == 0){
        return <div className={"start" + fade}>내용0</div>
    }
    if(props.탭 == 1){
        return <div className={"start" + fade}>내용1</div>
    }
    if(props.탭 == 2){
        return <div className={"start"  + fade}>내용2</div>
    }
}

//if문 대신 function Tab({탭}){ return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] } 으로도 사용 가능

export default Detail;