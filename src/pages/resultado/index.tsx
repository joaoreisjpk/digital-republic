import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { areaParaPintar } from '../../helpers';
import { useWalls } from '../../hooks/useWalls';

interface latasObjectProps {
  gigante: number;
  grande: number;
  media: number;
  pequena: number;
}

export default function Resultado() {
  const { wallsInfo } = useWalls();
  const [latasObject, setLatasObject] = useState({} as latasObjectProps);

  const { gigante, grande, media, pequena } = latasObject;

  // Atualiza o latasObject, informando quais latas de tintas são necessárias para a pintura do cõmodo
  const latasDeTinta = (param: number) => {
    const tempObject = { gigante: 0, grande: 0, media: 0, pequena: 0 };
    let tempArea = param;

    while (tempArea > 0) {
      if (tempArea >= 18) {
        tempObject.gigante += 1;
        tempArea -= 18;
      } else if (tempArea >= 3.6) {
        tempObject.grande += 1;
        tempArea -= 3.6;
      } else if (tempArea > 2) { // se eu colocasse (tempArea > 2.5), quando tivesse um valor como 2.1
        tempObject.media += 1;   // o código iria retornar 5 latas de 0.5, que é o mesmo que uma lata
        tempArea -= 2.5;         // de 2.5. Como é preferível sempre a lata maior, contornei esse
      } else {                   // erro com (tempArea > 2)
        tempObject.pequena += 1;
        tempArea -= 0.5;
      }
    }
    setLatasObject(tempObject);
  };

  useEffect(() => {
    // Calcula quantos litros de tinta são necessários
    // com a ajuda do Reducer que entrega a área total do cômodo
    const litrosDeTinta = areaParaPintar(wallsInfo) / 5;

    // responsável por armazenar na aplicação quais baldes de tintas são necessárias
    latasDeTinta(litrosDeTinta);
  }, [areaParaPintar]);

  return (
    <Stack
      justifyItems='center'
      direction='row'
      justifyContent='center'
      alignItems='center'
      margin='auto'
      height='calc(100vh - 3rem)'
      className='maindiv'
    >
      <Box width='40%' alignSelf='flex-start' marginTop={10}>
        <Typography fontSize='1.8rem' align='center' marginTop={5}>
          A melhor combinação pra você seria:
        </Typography>

        {/* Retorna a lista de baldes necessários */}
        <Box marginTop={4}>
          {!!gigante && (
            <Typography textAlign='center' fontSize='1.5rem'>
              {gigante} Lata(s) de 18L
            </Typography>
          )}
          {!!grande && (
            <Typography textAlign='center' fontSize='1.5rem'>
              {grande} Latas(s) de 3.6L
            </Typography>
          )}
          {!!media && (
            <Typography textAlign='center' fontSize='1.5rem'>
              {media} Lata(s) de 2.5
            </Typography>
          )}
          {!!pequena && (
            <Typography textAlign='center' fontSize='1.5rem'>
              {pequena} Lata(s) de 0.5
            </Typography>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
