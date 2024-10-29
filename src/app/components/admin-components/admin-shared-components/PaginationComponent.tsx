
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
 


interface IPaginationComponent{
    totalPageNo: number;
    searchUrl: string;
}

type ItemProps = {
  variant: "filled" | "text";
  className: string;
  onClick: () => void;
};



const PaginationComponent:React.FC<IPaginationComponent>= ({totalPageNo})=> {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index: number): ItemProps =>
    ({
      variant: active === index ? "filled" : "text",
      // color: "orange",
      className: active === index ? "bg-orange-800" : "bg-transparent",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };



  const pageElements=() => {
    const elements= [];
    for (let i = 0; i < totalPageNo; i++){
        elements.push(<IconButton key={`pagination${i}`} {...getItemProps(i+1)}>{i+1}</IconButton>);
    }
    return elements;
  }

 
  return (
    <div className="z-20 flex items-center gap-4 bg-white ">
      <Button
        variant="text"
        className="flex items-center gap-2 text-orange-800"
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="flex items-center gap-2">
        {...pageElements()}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2 text-orange-800"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}


export default PaginationComponent;