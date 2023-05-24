import { useNavigate } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";
// import { Nav } from "../../components/Nav/Nav";

export const LandingPage = () => {

  const navigate = useNavigate()

  const handleContinueClick = () => {
    navigate('/process-page')
  }
  // <Nav />;
  // <SideNav />;
  return(
    <DashboardContent handleContinueClick={handleContinueClick}/>
  )
};
