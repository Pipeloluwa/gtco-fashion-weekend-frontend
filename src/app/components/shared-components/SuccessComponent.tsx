import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
 



interface ISuccessComponent {
    successComponentState: boolean;
    setSuccessComponentState: Dispatch<SetStateAction<boolean>>;
    message: string;
}


const SuccessComponent:React.FC<ISuccessComponent>= ({successComponentState, setSuccessComponentState, message})=> {
 
  return (
    <>
      <Dialog open={successComponentState} handler={() => setSuccessComponentState(!open)} size="xs">
        <DialogHeader className="text-center w-full flex justify-center items-center">
          <IoCheckmarkDoneCircleSharp  className="text-orange-800 size-[100px]"/>
        </DialogHeader>

        <DialogBody className="text-center">
          {message}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setSuccessComponentState(false)}
            className="mr-1"
          >
            <span>Ok</span>
          </Button>

        </DialogFooter>
      </Dialog>
    </>
  );
}


export default SuccessComponent;