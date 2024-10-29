import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 



interface IPromptComponent {
    promptComponentState: boolean;
    setPromptComponentState: Dispatch<SetStateAction<boolean>>;
    confirmFunction: () => void;
    message: string;
    // [key:string]: (() => void) | boolean | Dispatch<SetStateAction<boolean>>;
}


const PromptComponent:React.FC<IPromptComponent>= ({confirmFunction, promptComponentState, setPromptComponentState, message})=> {
 
  return (
    <>
      <Dialog open={promptComponentState} handler={() => setPromptComponentState(!open)} size="xs">
        <DialogHeader className="text-center w-full flex justify-center items-center">{"Confirm this action"}</DialogHeader>
        <DialogBody className="text-center">
          {message}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setPromptComponentState(false)}
            className="mr-6 outline-none"
          >
            <span>Cancel</span>
          </Button>

          <Button className="bg-orange-800" onClick={confirmFunction}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}


export default PromptComponent;