import { useState } from "react"

export default function Home() {
    const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const [data, setData] = useState(content)

    const showData = content.map((item, i) => (
        <div key={i}>
            {item}
            {console.log(item)}
            <button onClick={() => setData((prev) => data[i] = prev[i] + 1)}>+</button>
        </div>

    ))

    return (
        <div>
            {showData}
        </div>
    )
}