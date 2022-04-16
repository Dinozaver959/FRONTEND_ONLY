import Authenticate from '../../components/Authenticate';
import CreateHeader from "../../components/CreateHeader";
import CreateContainer from "../../components/CreateContainer";

export default function TEST() {
  return (
    <>
      <Authenticate>
        <CreateHeader />

        <CreateContainer> 

        </CreateContainer>
      </Authenticate>
    </>
  )
}