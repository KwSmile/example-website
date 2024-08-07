import { useState } from "react"

export default function Home() {
    const content = 1

    const [data, setData] = useState(content)

    const showData = (
        <div>
            {data}
            <button onClick={() => setData(prev => prev + 1)}>+</button>
        </div>
    )

    return (
        <div>
            {showData}
        </div>
    )
}