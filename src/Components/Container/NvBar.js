import React, { useState } from 'react'
import './navb.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { message } from 'antd';

export const NvBar = () => {
    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const setval = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const SubmitData = async (e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else {


            const data = await fetch("https://backend-a-a-a-l.vercel.app/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            if (res.status === 201) {
                message.success("Registration Successfully done 😃!")
            }

        }
    }

    // login
    const [inpvall, setInpvall] = useState({
        email: "",
        password: ""
    });

    const setdata = (e) => {
        const { name, value } = e.target;

        setInpvall(() => {
            return {
                ...inpvall,
                [name]: value
            }
        })
    };

    const handledata = async (e) => {
        e.preventDefault();
        const { email, password } = inpvall;

        if (email === "") {
            toast.warning("email is required!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else {
            const data = await fetch("https://backend-a-a-a-l.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();

            if (res.status === 201) {
                localStorage.setItem("user", JSON.stringify(res));
                // navigate('/home')
                message.success("Login Successfully done 😃!")
            } else {
                message.error("Enter a Valid Password")
            }

        }

    }



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="/"><span style={{ color: "#fcb900" }}>ZU</span>HAUS</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#pages" aria-expanded="page">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#element">Elements</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}

                        >
                            {/* <Avatar className='mr4 bg-white b' style={{ color: "#fcb900" }}>G</Avatar> */}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>


                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-outline border-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"><span className='text-white' style={{ fontFamily: "cursive" }} >Add Listing +</span>

                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-body">

                                        <div>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Register</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Login</button>
                                                </li>

                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <form className='mt-5' style={{ textAlign: "left", width: "400px", margin: "5px auto" }}>
                                                        <h3>Sign Up</h3>

                                                        <div class="mb-3">
                                                            <label for="exampleInputName" class="form-label">Name</label>
                                                            <input type="text" name="fname" class="form-control" id="fname" value={inpval.fname} onChange={setval} placeholder='Enter Your Name' />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                            <input type="email" name="email" id="email" value={inpval.email} onChange={setval} class="form-control" placeholder='Enter Your Email Address' />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                                            <input type="password" class="form-control" name="password" id="password" value={inpval.password} onChange={setval} placeholder='Enter Your password' />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                                            <input type="password" class="form-control" name="cpassword" id="cpassword" value={inpval.cpassword} onChange={setval} placeholder='Confirm password' />
                                                        </div>

                                                        <button type="submit" class="btn btn-warning" onClick={SubmitData}>Submit</button>
                                                    </form>
                                                    <ToastContainer />

                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <form className='mt-5' style={{ textAlign: "left", width: "400px", margin: "5px auto" }}>
                                                        <h3>Sign In</h3>


                                                        <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                            <input type="email" name="email" id="email" value={inpvall.email} onChange={setdata} placeholder='Enter Your Email Address' class="form-control" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                                            <input type="password" class="form-control" name="password" id="password" value={inpvall.password} onChange={setdata} placeholder='Enter Your password' />
                                                        </div>


                                                        <button type="submit" class="btn btn-warning" onClick={handledata}>Submit</button>
                                                    </form>
                                                    <ToastContainer />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </nav>
    )
}
