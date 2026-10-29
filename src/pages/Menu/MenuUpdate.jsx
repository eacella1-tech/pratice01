import { useState } from "react";
import { useNavigate } from "react-router-dom";

//메뉴 수정
const MenuUpdate = ({ menus, setMenus }) => {
    const navi = useNavigate();

    const [result, setResult] = useState({
        id: "",
        name: "",
        price: ""
    });

    const handleUpdate = (e) => {
        setResult({
            ...result, [e.target.name]: e.target.value
        });
    };

    const Edit = () => {
        const menu = menus.find((e) => e.id == result.id);

        if (!menu) {
            alert("해당 ID의 메뉴가 없습니다.");
            return;
        }

        const updateMenus = menus.map((e) => {
            if (e.id == result.id) {
                return {
                    ...e, name: result.name, price: result.price
                };
            }

            return e;

        });

        setMenus(updateMenus);
        alert("수정되었습니다.");

        setResult({ id: "", name: "", price: "" });

        navi("/admin/menu/menuread");
    }

    return (
        <div className='main'>
            <input type="text" placeholder='수정할 메뉴 번호' name='id' value={result.id} onChange={handleUpdate} /><br />
            <input type="text" placeholder='수정할 메뉴명' name='name' value={result.name} onChange={handleUpdate} /><br />
            <input type="text" placeholder='수정할 가격' name='price' value={result.price} onChange={handleUpdate} /><br />
            <button onClick={Edit}>수정</button>
        </div>
    )
}

export default MenuUpdate