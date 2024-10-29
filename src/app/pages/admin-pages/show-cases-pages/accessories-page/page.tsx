"use client";
import ShowcasesFormComponent from '@/app/components/admin-components/show-cases-components/show-cases-shared-components/ShowcasesFormComponent';
import { setNavAdminValue, setNavBackButton } from '@/app/state_management/reducers/admin-reducers/navAdminValue';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PageIndex = () => {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavAdminValue({action: "Accessories"}));
        dispatch(setNavBackButton({action: false}));

      },[]);


    return (
        <ShowcasesFormComponent showCase='Accessories'/>
    );
}

export default PageIndex