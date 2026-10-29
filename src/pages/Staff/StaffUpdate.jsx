import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffsUpdate = ({ setStaffs, staffs }) => {
    const navi = useNavigate();
    const [updateTarget, setUpdateTarget] = useState({
        id: "",
        name: "",
        phone: ""
    });

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setUpdateTarget(prev => ({ ...prev, [name]: value }))
    }

    const edit = () => {
        if (updateTarget === "") {
            alert("수정하실 ID를 입력해주세요");
        }
        setStaffs(staffs.map(e => {
            if (e.id == updateTarget.id) {
                return { ...e, name: updateTarget.name, phone: updateTarget.phone }
            } else {
                return e;
            }
        }));
        setUpdateTarget({ id: "", name: "", phone: "" });
        navi("/admin/staffs/staffsread");
    }


    return (
        <div className='main'>
            <input type="Number"
                placeholder='수정하실 ID'
                onChange={handleEdit}
                name="id"
                value={updateTarget.id}
            />
            <input type="text"
                placeholder='수정하실 직원명'
                onChange={handleEdit}
                name="name"
                value={updateTarget.name}
            />
            <input type="text"
                placeholder='수정할 전화번호'
                onChange={handleEdit}
                name="phone"
                value={updateTarget.phone}
            />
            <button onClick={edit}> Edit</button>
        </div>
    );

}

export default StaffsUpdate