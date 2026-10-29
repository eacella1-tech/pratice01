import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 재고 수정
const InvenUpdate = ({ stocks, setStocks }) => {

    const navi = useNavigate();

    const [result, setResult] = useState({
        id: "",
        name: "",
        stock: ""
    });

    const handleUpdate = (e) => {
        setResult({
            ...result, [e.target.name]: e.target.value
        });
    };

    const Edit = () => {
        const stock = stocks.find((e) => e.id == result.id);

        if (!stock) {
            alert("해당 ID의 메뉴가 없습니다.");
            return;
        }

        const updateStocks = stocks.map((e) => {
            if (e.id == result.id) {
                return {
                    ...e, name: result.name, price: result.stock
                };
            }

            return e;

        });

        setStocks(updateStocks);
        alert("수정되었습니다.");

        setResult({ id: "", name: "", stock: "" });

        navi("/admin/inven/invenread");
    }

    return (
        <div className='main'>
            <input type="text" placeholder='수정할 재고 번호' name='id' value={result.id} onChange={handleUpdate} /><br />
            <input type="text" placeholder='수정할 재고명' name='name' value={result.name} onChange={handleUpdate} /><br />
            <input type="text" placeholder='수정할 개수' name='stock' value={result.stock} onChange={handleUpdate} /><br />
            <button onClick={Edit}>수정</button>
        </div>
    )
}

export default InvenUpdate