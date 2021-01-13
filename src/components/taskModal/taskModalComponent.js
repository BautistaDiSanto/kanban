import styled from "styled-components";
import { motion } from "framer-motion";
import { IoIosAlert, IoMdCreate, IoMdClose, IoMdContact } from "react-icons/io";

export const Cointainer = styled(motion.div)`
  height: 100vh;
  width: 24rem;
  border-left: 1px solid #2d3748;
  background-color: #011627;
  z-index: 1;
  position: absolute;
  right: 0;
  overflow: hidden;
`;

export const TaskTitle = styled(motion.div)`
  height: 12.5%;
  width: 100%;
  border-bottom: 1px solid #2d3748;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TaskDiv = styled(motion.div)`
  margin-top: 2.2rem;
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const AlertIcon = styled(IoIosAlert)`
  margin-left: -1rem;
  height: 2rem;
  width: 2rem;
  color: greenyellow;
`;

export const Title = styled(motion.div)`
  width: 70%;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  color: #58a6f8;
`;

export const EditIcon = styled(IoMdCreate)`
  height: 1.5rem;
  width: 1.5rem;
  color: grey;
  :hover {
    transform: scale(1.05);
    color: greenyellow;
    cursor: pointer;
  }
  :active {
    transform: scale(1.2);
  }
`;

export const CloseIcon = styled(IoMdClose)`
  height: 1.5rem;
  width: 1.5rem;
  color: grey;
  :hover {
    transform: scale(1.05);
    color: red;
    cursor: pointer;
  }
  :active {
    transform: scale(1.2);
  }
`;

export const TaskDescription = styled(motion.div)`
  height: 35%;
  width: 100%;
  border-bottom: 1px solid #2d3748;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserIcon = styled(IoMdContact)`
  height: 3.5rem;
  width: 3.5rem;
  color: white;
`;

export const DescriptionInfo = styled(motion.div)`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const UserInfo = styled(motion.div)`
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  color: grey;
`;

export const Description = styled(motion.div)`
  height: 70%;
  width: 100%;
  margin: 1rem;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

export const Footer = styled(motion.div)`
  height: 10%;
  width: 100%;
  border-top: 1px solid;
`;

export const TaskAssignees = styled(motion.div)`
  height: 30%;
  width: 100%;
  border-bottom: 1px solid #2d3748;
`;
