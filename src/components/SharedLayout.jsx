import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
                    
            </header>
            <main>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </div>
    )
}