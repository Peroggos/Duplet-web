import { Link } from "react-router";


export function Home() {

    return(
        <div className="flex justify-between border-b px-8 p-5">
            <div className="flex">
                <img src="../mg/logo" alt="logo" />
                <div>
                    <h2>Diplet</h2>
                </div>
            </div>
            <ul className="flex items-center px-14 gap-20">
                <li>
                    для чего
                </li>
                <li >
                    <Link to='/log'>Вход</Link>
                </li>
            </ul>
        </div>
    )
}