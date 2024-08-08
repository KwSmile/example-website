import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

    const [imgData, setImgData] = useState()

    useEffect(() => {
        async function getImgData() {
            const { data } = await axios(`hhttps://picsum.photos/300`)
            setImgData(data)

        }
        getImgData()

    }, [])


    const showData = (
        <div>
            {imgData}
            <img />
            {/* <button onClick={() => setData(prev => prev + 1)}>+</button> */}
        </div>
    )

    return (
        <div>
            {showData}
        </div>
    )
}