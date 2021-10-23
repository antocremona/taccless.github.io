import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <ItemListContainer imgname="../ItemListContainer/media/premezcla_bizvainilla_delicel.png" prodname="Premezcla Delicel Bizcochuelo Vainilla" proddesc="Premezcla sin Tacc marca Delicel para preparar bizcochuelo de vainilla" />
        </div>
    );

};
