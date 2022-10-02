import "./Navbar.css"

export function Navbar(){
    return (
            <div className="
            flex flex-col fixed top-0 h-screen
            w-64 bg-black text-gray-400 font-bold
            ">
            <button className="padding-left-50px"> <img src="../assets/home.png"></img>  Home </button>
            <button className=""> Search </button>
            <button className=""> Your Library </button>
            <button className=""> Create Playlist </button>
            <button className=""> Liked Songs </button>
            <div className="playlists">
            </div>
        </div>
    )}