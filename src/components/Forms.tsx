import { Button, Grid, Stack, Typography } from '@mui/material';
import { Form } from 'formik';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import MUInput from './MUInput';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function Forms({ index }) {
  return (
    <Form>
      <Grid
        container
        marginTop='2.5rem'
        gap={4}
        justifyItems='center'
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
      >
        <Stack spacing={2}>
          <Typography variant='h6' component='label' htmlFor='paredeAltura'>
            Informações da Parede:
          </Typography>
          {/* MUInput é um Componente criado por mim, de acordo com o conceito DRY  */}
          <MUInput
            name='paredeAltura'
            type='input'
            label='Altura da parede: m'
          />{' '}
          <MUInput
            type='input'
            name='paredeComprimento'
            label='Comprimento da parede: m'
          />{' '}
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h6' component='label' htmlFor='portasNumero'>
            Informações das portas/janelas:
          </Typography>
          <MUInput type='input' name='portasNumero' label='Número de portas' />{' '}
          <MUInput
            type='input'
            name='janelasNumero'
            label='Número de janelas'
          />{' '}
          <Button
            endIcon={index == 4 ? <CalculateIcon /> : <SendIcon />}
            type='submit'
            size='large'
            variant='contained'
            sx={{
              width: 265,
            }}
          >
            {index === 4 ? 'Calcular' : 'Próxima parede'}
          </Button>
        </Stack>
      </Grid>
    </Form>
  );
}
