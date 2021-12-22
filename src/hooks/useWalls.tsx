import { createContext, useContext, useState } from 'react';

// Passar por props seria o mais viável, mas quero demonstrar meus
// conhecimentos na criação de hooks

interface inputsDataProps {
  paredeAltura: number | '';
  paredeComprimento: number | '';
  portasNumero: number | '';
  janelasNumero: number | '';
}

interface contextProps {
  wallsInfo: inputsDataProps[];
  setWallsInfo: (param: inputsDataProps[]) => void;
}

export const WallsContext = createContext({} as contextProps);

export function WallsProvider({ children }) {
  const [wallsInfo, setWallsInfo] = useState([] as inputsDataProps[]);

  return (
    <WallsContext.Provider value={{ wallsInfo, setWallsInfo }}>
      {children}
    </WallsContext.Provider>
  );
}

export function useWalls() {
  const context = useContext(WallsContext);

  return context;
}
