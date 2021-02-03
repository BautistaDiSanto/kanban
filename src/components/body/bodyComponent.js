import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
`
export const NavShit = styled(motion.div)`
    width: 100%;
    height: 3rem;
    background-color: red;
`

export const ColumnButton = styled(motion.button)`
    margin: 1rem;
    width: 15rem;
    height: 20rem;
    background-color: inherit;
    border: 1px solid lightgray;
    outline: none;
    color: white;
    font-weight: bolder;
    font-size: 2rem;
    padding: 1rem;
    :hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`