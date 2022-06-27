import { createContext, useCallback, useContext, useState } from 'react'

/* Context para o toggle do menu lateral nas versões mobile */


interface IDrawerContextData {
    isMenuOpen: boolean;
    handleMenuClick: () => void;
}

const DrawerContext = createContext ({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext);

}

type Props = {
    children: React.ReactNode
};
export const MenuContext = ({children}:Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);


    /* Usado useCallback para previnir possiveis loops infinitos */
    const handleMenuClick = useCallback(() => {
        setMenuOpen(oldMenuOpen => !oldMenuOpen)
    }, [])


    return (
        <DrawerContext.Provider value={{isMenuOpen, handleMenuClick}}>
          {children}
        </DrawerContext.Provider>
    )
}