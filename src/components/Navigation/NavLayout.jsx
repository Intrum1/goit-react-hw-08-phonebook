import { Outlet } from 'react-router-dom';
import { Nav } from './Navigation';
import { Container } from 'components/Container/ContainerStyled';
import { Header } from './NavigationStyled';

export const NavLayout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Nav />
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
