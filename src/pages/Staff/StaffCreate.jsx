import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffsCreate = ({ setStaffs }) => {
    const navi = useNavigate();

    const [staff, setStaff] = useState({
        id: "",
        name: "",
        phone: ""
    });

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setStaff(prev => ({ ...prev, [name]: value }));
    }
    const plus = () => {
        setStaffs(prev => [...prev, staff]);
        setStaff({ id: "", name: "", phone: "" });
        navi("/admin/staffs/staffsread");
    }
    return (
        <div className='main'>
            <input type="Number"
                placeholder='등록하실 ID'
                onChange={handleAdd}
                name="id"
                value={staff.id}
            />
            <input type="text"
                placeholder='등록하실 직원명'
                onChange={handleAdd}
                name="name"
                value={staff.name}
            />
            <input type="text"
                placeholder='등록하실 전화번호'
                onChange={handleAdd}
                name="phone"
                value={staff.phone}
            />
            <button onClick={plus}> Add</button>
        </div>
    );
}

export default StaffsCreate