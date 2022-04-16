import Authenticate from '../../components/Authenticate';
import CreateHeader from "../../components/CreateHeader";
import CreateContainer from "../../components/CreateContainer";
import Interact_ from "../../components/Interact";

export default function Interact() {
  return (
    <>
      <Authenticate>
        <CreateHeader />

        <CreateContainer> 
          <Interact_ />
        </CreateContainer>
      </Authenticate>
    </>
  )
}