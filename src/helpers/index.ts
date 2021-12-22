// Por questões de UX, eu deixei o valor inicial dos inputs como '' (string vazio)
// visto que, se eu deixar como 0, atrapalharia o preenchimento da label
// fazendo a mesma aparecer só na borda (coisas do Material UI)
interface validateInputProps {
  paredeAltura: number | '';
  paredeComprimento: number | '';
  portasNumero: number | '';
  janelasNumero: number | '';
}

// Valida os inputs de acordo com todas as regras de negócio
// 1 - Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes
// 2 - O total de área das portas e janelas deve ser no máximo 50% da área de parede
// 3 - A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta

export const validateInputs = ({
  paredeAltura = 0,
  paredeComprimento = 0,
  portasNumero = 0,
  janelasNumero = 0,
}: validateInputProps) => {
  const paredeArea = Number(paredeAltura) * Number(paredeComprimento);
  const janelasArea = 2.4 * Number(janelasNumero);
  const portasArea = 1.9 * 0.8 * Number(portasNumero);

  const paredesValidation = paredeArea < 1 || paredeArea > 15;
  const paredesErrorMessage = 'A area da parede deve estar entre 1 e 15';

  const paredesAreaValidation = janelasArea + portasArea > paredeArea / 2;
  const paredesAreaErrorMessage =
    'A area da parede deve ser o dobro da area das portas e janelas somadas';

  const alturaDaParedeValidation = !!portasArea && paredeAltura < 2.2;
  const alturaDaParedeErrorMessage =
    'Paredes com portas devem ter no mínimo 2.2 metros';

  if (paredesValidation) {
    return {
      paredeAltura: paredesErrorMessage,
      paredeComprimento: paredesErrorMessage,
    };
  } else if (paredesAreaValidation) {
    return {
      paredeAltura: ' ',
      paredeComprimento: paredesAreaErrorMessage,
      portasNumero: ' ',
      janelasNumero: paredesAreaErrorMessage,
    };
  } else if (alturaDaParedeValidation) {
    return {
      paredeAltura: alturaDaParedeErrorMessage,
      portasNumero: ' ',
    };
  }
  return {};
};

interface areaParaPintarProps {
  paredeAltura: number | '';
  paredeComprimento: number | '';
  portasNumero: number | '';
  janelasNumero: number | '';
}

const janelasDefaultArea = 2.4;
const portasDefaultArea = 1.9 * 0.8;

// Retorna a Area para pintar, já removendo a área das portas e janelas
export const areaParaPintar = (array: areaParaPintarProps[]): number =>
  array.reduce(
    (acc, { janelasNumero, paredeAltura, paredeComprimento, portasNumero }) => {
      const janelaArea = janelasNumero ? janelasDefaultArea * janelasNumero : 0;
      const portasArea = portasNumero ? portasDefaultArea * portasNumero : 0;

      const paredeArea = Number(paredeAltura) * Number(paredeComprimento);

      const totalArea = paredeArea - janelaArea - portasArea;

      return acc + totalArea;
    },
    0
  );
