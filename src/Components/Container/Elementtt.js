import React from 'react'

export const Elementtt = () => {
    return (
        <div>
            <section>

                <div className='container'>
                    <h1>See How It Works</h1>
                    <div className='row' style={{ margin: "50px 100px" }}>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '18rem', border: "none" }}>
                                <img src={require('../Images/home-process-img-1.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Choose a Category</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '18rem', border: "none" }}>
                                <img src={require('../Images/home-process-img-2.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Find Real Estate</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '18rem', border: "none" }}>
                                <img src={require('../Images/home-process-img-3.png')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Take the Keys</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}
