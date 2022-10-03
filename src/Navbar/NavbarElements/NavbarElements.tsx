interface props{
    name: string
    icon?: string
}

export function NavbarElements(props: props){
    return (
        <button className="
        hover:text-white p-3
        block pl-5 text-left
        hover:bg-cyan-500 duration-250 rounded-r-md
        transition ease-in-out delay-50
        "> {props.name} </button>
    )
}