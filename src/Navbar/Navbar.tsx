import "./Navbar.css"
import {NavbarElements} from "./NavbarElements/NavbarElements";

export function Navbar(){
    return (
        <div className="
        flex flex-col fixed top-0 h-screen
        w-64 bg-black text-gray-400 font-bold
        ">
            <div className="pt-10">
                <NavbarElements name={"Home"} />
                <NavbarElements name={"Search"} />
                <NavbarElements name={"Your Library"} />
                <NavbarElements name={"Create Playlist"} />
                <NavbarElements name={"Liked Songs"} />
            </div>
        </div>
    )}