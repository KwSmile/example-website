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



    const imgList = () => {
        let arr = []
        for (let index = 0; index < 20; index++) {
            arr.push(<img src={imgData} alt="random image from test api" width='300' />)
        }
        console.log(arr)
        return arr
    }

    const showData = (
        <div>
            {imgList.array.map(img => (
                <>
                    {img}
                </>
            ))}
        </div>
    )

    return (
        <>
            {showData}
        </>
    )
}