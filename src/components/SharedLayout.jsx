import { Outlet } from "react-router-dom";
import { NavContainer,Header, NavList, NavListItem, StyledLink } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <div>
            <Header>
                <NavContainer>
                    <nav>
                        <NavList>
                            <NavListItem>
                                <StyledLink to="/">Home</StyledLink>
                            </NavListItem>
                            <NavListItem>
                                <StyledLink to="/movies">Movies</StyledLink>
                            </NavListItem>
                        </NavList>
                    </nav>
                </NavContainer>         
            </Header>
            <main>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </div>
    )
}