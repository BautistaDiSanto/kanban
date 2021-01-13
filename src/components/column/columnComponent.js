import styled from "styled-components";
import { motion } from "framer-motion";
import {
  IoIosAdd,
  IoIosMenu,
  IoIosAlert,
  IoMdContact,
  IoIosMore,
} from "react-icons/io";

export const Cointainer = styled(motion.div)`
  margin: 0.5rem;
  font-family: "Montserrat", sans-serif;
  width: 25rem;
  height: 45rem;
  border-radius: 0.5rem;
  background-color: #011627;
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
`;

export const TopBar = styled(motion.div)`
  background-color: #011627;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2d3748;
`;

export const TopData = styled(motion.div)`
  height: 100%;
  width: 18rem;
  display: flex;
  align-items: center;
`;

export const TasksCounter = styled(motion.div)`
  height: 2rem;
  width: 2rem;
  margin-left: 0.8rem;
  border-radius: 100rem;
  background-color: #2d3748;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(motion.div)`
  width: 10.2rem;
  margin-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;
`;

export const TopMenus = styled(motion.div)`
  height: 100%;
  width: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PlusIcon = styled(IoIosAdd)`
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
  :hover {
    cursor: pointer;
    color: #58a6f8;
  }
  :active {
    transform: scale(1.2);
  }
`;

export const MenuIcon = styled(IoIosMenu)`
  height: 2rem;
  width: 1.7rem;
  :hover {
    cursor: pointer;
    color: #58a6f8;
  }
  :active {
    transform: scale(1.2);
  }
`;

export const Tasks = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskCard = styled(motion.div)`
  width: 95%;
  margin: 0.5rem;
  height: 4rem;
  border-radius: 0.6rem;
  border: 1px solid #41454d;
  background-color: #2d3748;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    border: 1px solid #666666;
    cursor: move;
  }
`;

export const TaskMenu = styled(motion.div)`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Alerticon = styled(IoIosAlert)`
  margin-bottom: 1.2rem;
  margin-left: -0.5rem;
  height: 2rem;
  width: 2rem;
  color: greenyellow;
`;

export const InfoContainer = styled(motion.div)`
  height: 100%;
  width: 70%;
  margin-left: -0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: auto;
  }
`;

export const TaskTitle = styled(motion.div)`
  color: #58a6f8;
  font-weight: bolder;
  padding-bottom: 0.2rem;
`;

export const InfoTask = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

export const UserIcon = styled(IoMdContact)`
  height: 2.5rem;
  width: 2.5rem;
`;

export const MoreIcon = styled(IoIosMore)`
  margin-top: -0.3rem;
  height: 1.5rem;
  width: 1.5rem;
  :hover {
    cursor: pointer;
    color: #3287ff;
  }
  :active {
    transform: scale(1.2);
  }
`;
