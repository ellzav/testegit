import Header from '../Header';
import SideBar from '../Sidebar';
import {Container,SidebarContainer,ContentContainer} from './styles';
function Layout ({children}){
    return(
        <>
        <Header></Header>
        <Container>
            <SideBar></SideBar>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
        </>
    )
}

export default Layout;