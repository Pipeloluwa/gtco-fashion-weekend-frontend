"use client";
import FooterComponent from "@/app/components/client-components/client-shared-components/FooterComponent";
import NavBarComponent from "@/app/components/client-components/client-shared-components/NavBarComponent";
import { pacificoFont } from "@/app/fonts/fontsConfig";
import { setNavBg } from "@/app/state_management/reducers/client-reducers/navBgState";
import { RootState } from "@/app/state_management/stores/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";



interface IClientLayout {
    children: React.ReactNode;
}


const ClientLayout:React.FC<IClientLayout>= ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) =>  {


  const navValue= useSelector((state:RootState) => state.navValue.value);
  const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
  const dispatch= useDispatch();

  useEffect(() => {
    const handleScroll= () => {
      dispatch(setNavBg({scrollValue: parentDivRef.current?.scrollTop}));
    }

    if (parentDivRef.current){
      parentDivRef.current.addEventListener('scroll', handleScroll) 
    }


  }, [navValue]);


  return (
    <div ref={parentDivRef} className={`${pacificoFont.className} text-gray-800 h-svh overflow-hidden ${navValue !== "Enroll" && "overflow-y-scroll"}`}>
        {navValue !== "Enroll" && <NavBarComponent />}
        {children}
        {!["Enroll","Highlights"].includes(navValue) && <FooterComponent />}
    </div>
  );
}

export default ClientLayout;
