import Authenticate from '../../components/Authenticate';
import CreateHeader from "../../components/CreateHeader";
import CreateContainer from "../../components/CreateContainer";
import Dashboard_ from "../../components/Dashboard";

export default function Dashboard() {
  return (
    <>
        <Authenticate>
          <CreateHeader />

          <CreateContainer> 
            <Dashboard_ />
          </CreateContainer>
        </Authenticate>
    </>
  )
}