import {ColumnButton, Container, NavShit} from './bodyComponent'

export const Body = () =>{
    return(
        <Container>
            <NavShit/>
            <ColumnButton>
                add a new column <br/> +
            </ColumnButton>
        </Container>
    )
}