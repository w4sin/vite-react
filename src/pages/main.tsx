import { useState } from "react"
import Sidebar from "../components/sidebar"
import SwitchTheme from "../components/switch-theme"
import { SECTION_WIDTH } from "../ultils/size"

const MainPage = () => {

    const [openSidebar, setOpenSidebar] = useState(true)

    const toggleSidebar = () => {
        setOpenSidebar(() => !openSidebar)
    }

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <Sidebar isOpen={openSidebar} toggleSidebar={toggleSidebar} />


            <section
                className={`absolute left-0 w-full h-full
                transition-all duration-500 ease-in-out ${SECTION_WIDTH}`}>

                <div className="2xl:container w-full h-full mx-auto">
                    <SwitchTheme />

                </div>

            </section>

            {/*             
            <SwitchTheme />

            <h1 className="prose ">aaaaaa</h1>
            <h1 className="text-secondary">aaaaaa</h1>

            <button className="btn btn-primary min-w-36">Primary</button>
            <button className="btn btn-secondary">Secondary</button> */}
        </div>
    )
}

export default MainPage