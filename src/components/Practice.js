import React, { useState, useEffect } from 'react'

function Practice() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const datas = [123123, 12512, 315123, 56132]
        setData(datas)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {loading === false ? data.map((item) =>
                <div>{item}</div>
            ) : <div>error</div>
            }
        </div>
    )
}

export default Practice