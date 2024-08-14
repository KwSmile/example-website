import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

    const [imgData, setImgData] = useState()

    useEffect(() => {
        async function getImgData() {

            const { data } = await axios(`https://placehold.co/300`, { responseType: 'blob' })
            const imgUrl = URL.createObjectURL(data)
            setImgData(imgUrl)


        }
        getImgData()

    }, [])


    const showData = (
        <div>
            {console.log('data use')}
            <div>
                <img src={imgData} alt="random image from test api" width='300' />
            </div>
            {/* {imgData} */}
            {/* <button onClick={() => setData(prev => prev + 1)}>+</button> */}
        </div>
    )

    return (
        <div>
            {showData}
        </div>
    )
}