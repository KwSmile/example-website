import { NavLink } from "react-router-dom"

export default function Tab(props) {
    const { name, path } = props
    return (
        <>
            <div>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </>
    )

}