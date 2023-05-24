import { useNavigate } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";

export const LandingPage = () => {

  const navigate = useNavigate()

  const handleContinueClick = () => {
    navigate('/process-page')
  }
  return(
    <DashboardContent handleContinueClick={handleContinueClick}/>
  )
};
