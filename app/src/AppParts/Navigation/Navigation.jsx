import Tab from "./Tab";

export default function Navigation() {

    return (
        <>
            <div>
                <Tab name='Home' path='/' />
                <Tab name='Dark' path='/dark' />
                <Tab name='Tech' path='/tech' />
                <Tab name='Game' path='/game' />
            </div>
        </>
    )
}