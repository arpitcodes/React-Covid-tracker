import React, { useEffect, useState } from 'react'

const Cases = () => {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const fetchedData = await res.json();
            console.log(fetchedData);
            setData(fetchedData.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>

            <section>
                <h2>CountryWide Case Statistics</h2>
                <ul>
                    <li>
                        <div>
                            <div>
                                <p><span>our</span> Country</p>
                                <p>INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <p><span>Total</span> Cases</p>
                                <p>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <p><span>Total</span> Active Cases</p>
                                <p>{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <p><span>Total</span> Recovered</p>
                                <p>{data.recovered}</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <p><span>Total</span> Deaths</p>
                                <p>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <p><span>Last</span> Update</p>
                                <p>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>

            </section>

        </>
    )
}

export default Cases;
