import { useNavigate } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";
// import { Nav } from "../../components/Nav/Nav";

export const LandingPage = () => {

  const navigate = useNavigate()

  const handleContinueClick = () => {
    navigate('/step-1')
  }
  // <Nav />;
  // <SideNav />;
  return(
    <DashboardContent handleContinueClick={handleContinueClick}/>
  )
};
