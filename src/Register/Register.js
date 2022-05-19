import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';

export default function Register() {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/api/v1/customer/register",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({email, password}
            )
        }).then(() => {
            console.log("register success");
        })
    }

    return(
        <div className="container mt-5 p-3 rounded bg-light">
            <h3>สร้างบัญชีผู้ใช้งาน</h3>
            <form>
                <label class="col-sm-2 col-form-label">อีเมล์</label>
                <input type="text" className="form-control" name="email" value={ email }
                            onChange={(e)=>setEmail(e.target.value)} 
                        />
                <label class="col-sm-2 col-form-label">รหัสผ่าน</label>
                <input type="text" className="form-control" name="password" value={ password }
                            onChange={(e)=>setPassword(e.target.value)} 
                        />
                <label class="col-sm-2 col-form-label">ยืนยันรหัสผ่าน</label>
                <input type="text" className="form-control" name="password" />
                <button type="button" className="btn btn-secondary" onClick={submitClick}><i class="bi bi-pencil-square"></i> ลงทะเบียน</button>
            </form>
        </div>
    )
}