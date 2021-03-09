import React from 'react'


const Covid = ({ cases }) => {

    return (
        <div>

            <h2 className="mb-4">Country wise covid cases</h2>
            <div className="container-fluid mt-5 hello">
    
                <div className="row text-center">

                    {
                        cases.map((curElem) => {

                            const { country, cases, recovered, deaths, countryInfo } = curElem;
                            return (       
                                      
                                    <div className="col-10 col-md-4 mt-5" key={countryInfo._id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={countryInfo.flag} className="rounded" width="100" /> </div>
                                                <div className="ml-2 w-50">
                                                    <h4 className="mb-0 mt-1 textLeft">{country}  </h4>
                                                    {/* <span className="text-left">{type }</span> */}
                                                    <div className="p-2 mt-2 row flex-column bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Cases</span> <span className="number1">{cases}</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Recovered</span> <span className="number2">{recovered}</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Deaths</span> <span className="number3">{deaths}</span> </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                            )
                        })

                    }

                </div>
            </div>
        </div>
    )
}

export default Covid
