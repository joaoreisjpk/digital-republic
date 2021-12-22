import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import Forms from '../components/Forms';
import { validateInputs } from '../helpers';
import { Typography } from '@mui/material';
import LinearWithValueLabel from '../components/LinearProgress';
import { useWalls } from '../hooks/useWalls';

interface inputsDataProps {
  paredeAltura: number | '';
  paredeComprimento: number | '';
  portasNumero: number | '';
  janelasNumero: number | '';
}

export default function Home() {
  const { push } = useRouter();
  const [index, setIndex] = useState(0);
  const { setWallsInfo, wallsInfo } = useWalls();

  // Atualiza as informações da parede, ou redireciona para a página de resultados
  // dependendo do valor do index(número da parede - 1)
  const submitHandler = async (inputsData: inputsDataProps, resetForm) => {
    if (index === 0) setWallsInfo([inputsData]);
    else setWallsInfo([...wallsInfo, inputsData]);

    if (index === 3) return push('/resultado');

    setIndex(index + 1);
    resetForm({ values: '' });
  };

  return (
    <div className='maindiv'>
      <LinearWithValueLabel value={index} />
      <Typography
        fontSize='1.8rem'
        align='center'
        marginTop={5}
        marginLeft={-5}
      >
        Parede {index + 1} de 4
      </Typography>
      <Typography fontSize='.8rem' marginLeft={-5} align='center'>
        Por padrão as portas tem as dimensões: 0,80 x 1,90 e as janelas: 2,00 x
        1,20 mtos
      </Typography>
      <Formik
        initialValues={{
          paredeAltura: '',
          paredeComprimento: '',
          portasNumero: '',
          janelasNumero: '',
        }}
        /* Valida os dados dos inputs, OBS: a função foi realocada para o src/helpers */
        /* devido à sua alta complexidade */
        validate={(inputsData: inputsDataProps) => validateInputs(inputsData)}
        onSubmit={async (inputsData: inputsDataProps, { resetForm }) =>
          await submitHandler(inputsData, resetForm)
        }
      >
        {/* O form foi componentizado devido ao seu tamanho, nele se encontra todos os input e o botão */}
        {() => <Forms index={index + 1} />}
      </Formik>
    </div>
  );
}
