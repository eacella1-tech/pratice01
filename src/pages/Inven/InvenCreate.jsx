import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 재고 등록
const InvenCreate = ({ setStocks }) => {

    const navi = useNavigate();

    const [stock, setStock] = useState({
        id: "",
        name: "",
        stock: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStock(prev => ({ ...prev, [name]: value }));
    }

    const Add = () => {
        setStocks(prev => [...prev, stock]);
        setStock({ id: "", name: "", stock: "" });
        navi("/admin/inven/invenread");
    }

    return (
        <div className='main'>
            <input type="text" placeholder='등록할 재고 번호' name='id' value={stock.id} onChange={handleChange} /><br />
            <input type="text" placeholder='등록할 재고명' name='name' value={stock.name} onChange={handleChange} /><br />
            <input type="text" placeholder='등록할 개수' name='stock' value={stock.stock} onChange={handleChange} /><br />
            <button onClick={Add}>추가</button>
        </div>
    )
}

export default InvenCreate