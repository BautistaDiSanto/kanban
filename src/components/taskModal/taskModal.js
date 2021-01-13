import {
  Cointainer,
  Footer,
  TaskTitle,
  TaskDescription,
  TaskAssignees,
  Title,
  AlertIcon,
  EditIcon,
  CloseIcon,
  TaskDiv,
  UserIcon,
  DescriptionInfo,
  Description,
  UserInfo,
} from "./taskModalComponent";

export const TaskModal = () => {
  return (
    <Cointainer>
      <TaskTitle>
        <TaskDiv>
          <AlertIcon />
        </TaskDiv>
        <Title>
          <text> Titulo de la tarea a asignar</text>
          <div>
            <text style={{ fontWeight: "lighter", color: "grey" }}>
              #1 opened by
            </text>
            <text style={{ color: "white" }}> jesusDeNazaret</text>
          </div>
        </Title>
        <TaskDiv>
          <EditIcon />
          <CloseIcon />
        </TaskDiv>
      </TaskTitle>
      <TaskDescription>
        <DescriptionInfo>
          <TaskDiv>
            <UserIcon />
          </TaskDiv>
          <UserInfo>
            <text style={{ fontWeight: "bolder" }}>jesusDeNazaret</text>
            <text>Commented yesterday</text>
          </UserInfo>
          <TaskDiv>
            <EditIcon />
          </TaskDiv>
        </DescriptionInfo>
        <Description>
          <text>
            Descripcion increiblemente detallada de la tarea que estas
            obserbando ahora mismo, si esa, exactamente esa :)
          </text>
        </Description>
      </TaskDescription>
      <TaskAssignees></TaskAssignees>
      <Footer></Footer>
    </Cointainer>
  );
};
