import { useNavigate } from "react-router-dom";
import { DashboardContent } from "../../components/DashboardContent/DashboardContent";

export const LandingPage = (props) => {

  const navigate = useNavigate()

  const handleContinueClick = () => {
    navigate('/process-page')
    props.handleContinueClick();
  }
  return(
    <DashboardContent handleContinueClick={handleContinueClick}/>
  )
};
