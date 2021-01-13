import {
  Cointainer,
  TopBar,
  TopData,
  TopMenus,
  MenuIcon,
  PlusIcon,
  TasksCounter,
  Title,
  Tasks,
  TaskCard,
  Alerticon,
  InfoContainer,
  InfoTask,
  TaskMenu,
  UserIcon,
  MoreIcon,
  TaskTitle,
} from "./columnComponent";

export const Column = () => {
  const count = 5;

  const title = "Hello - Lionel Richie";

  const Task = () => {
    return (
      <TaskCard drag>
        <TaskMenu>
          <Alerticon />
        </TaskMenu>
        <InfoContainer>
          <TaskTitle>titulo de la tarea</TaskTitle>
          <InfoTask>
            <text style={{ color: "grey", fontWeight: "lighter" }}>
              #1 opened by&nbsp;
            </text>
            <text style={{ fontWeight: "bolder" }}>jesusDeNazaret</text>
          </InfoTask>
        </InfoContainer>
        <TaskMenu>
          <MoreIcon />
          <UserIcon />
        </TaskMenu>
      </TaskCard>
    );
  };
  return (
    <Cointainer>
      <TopBar>
        <TopData>
          <TasksCounter>{count}</TasksCounter>
          <Title>{title}</Title>
        </TopData>
        <TopMenus>
          <PlusIcon></PlusIcon>
          <MenuIcon></MenuIcon>
        </TopMenus>
      </TopBar>
      <Tasks>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </Tasks>
    </Cointainer>
  );
};
