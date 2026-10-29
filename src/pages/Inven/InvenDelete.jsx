import { useState } from "react";

// 재고 삭제
const InvenDelete = ({ stocks, setStocks }) => {

    const [deleteId, setDeleteId] = useState("");

    const handleDelete = () => {
        const stock = stocks.find((e) => e.id == deleteId);
        if (!stock) {
            alert("해당 ID의 재고가 없습니다.");
            return;
        }

        const deleteStocks = stocks.filter((e) => e.id != deleteId);

        setStocks(deleteStocks);
        alert("삭제되었습니다.");

        setDeleteId("");
    }


    return (
        <div className='main'>
            <input type="text" placeholder='삭제할 재고 번호' name='id' onChange={(e) => setDeleteId(e.target.value)} /><br />
            <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default InvenDelete
