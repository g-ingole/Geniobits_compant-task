import React, { useState } from 'react'
import './pages.css'
import Form from 'react-bootstrap/Form';
import Data from './Data';


export const Pages = () => {
    const [data] = useState(Data);
    const [searchFeild, setSearchFeild] = useState('')
    return (
        <div>

            <h2 className='head'>Best Offers This Week</h2>
            <p className='parag'>“Owning a home is a keystone of wealth… both financial affluence and emotional security.” </p>

            <div className='mb5 container'>
                <Form.Control
                    type="search"
                    className="ms-5"
                    aria-label="Search"
                    style={{ height: "40px", width: "250px" }}
                    onChange={(e) => {
                        setSearchFeild(e.target.value)
                    }} placeholder='Search...'
                />
            </div>
            {
                Data.filter((val) => {
                    if (searchFeild === '') {
                        return val;
                    } else if (
                        val.title.shortTitle.toLowerCase().includes(searchFeild.toLowerCase()) ||
                        val.title.shortTitle.toLowerCase().includes(searchFeild.toLowerCase()) ||
                        val.title.shortTitle.toLowerCase().includes(searchFeild.toLocaleLowerCase())
                    ) {
                        return val;
                    }
                }).map((e, i) => {
                    return (
                        <div className='container'>
                            <div key={i} className='dib fl img-wrapper containerr' style={{ margin: "0 35px 30px" }} >
                                <p>{e.title.longTitle}</p>
                                <p>$:{e.price.cost}</p>
                                <img alt='' className="rounded-4 inner-img" src={e.url} id='pages' />
                                {/* <div className="button" ><a href="/"> View Details</a></div> */}

                            </div>



                        </div>



                    )
                })
            }




        </div >

    )
}
