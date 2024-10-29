"use client";
import InspirationsFormComponent from '@/app/components/admin-components/inspirations-components/inspirations-shared-components/InspirationsFormComponent';
import { setNavAdminValue, setNavBackButton } from '@/app/state_management/reducers/admin-reducers/navAdminValue';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PageIndex = () => {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavAdminValue({action: "Inspirations"}));
        dispatch(setNavBackButton({action: false}));
      },[]);


    return (
        <InspirationsFormComponent />
    );
}

export default PageIndex