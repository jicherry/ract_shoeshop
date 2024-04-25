import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux" // useSelector -> 리덕스 스토어 가져와줌
import { addCount } from "./../store.js"

function Cart(){

    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch() // store.js 로 요청 보내주는 함수

    return(
        <div>
            <h5>{state.user.name} 님의 장바구니</h5>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a , i)=>{
                        return(
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}







export default Cart;