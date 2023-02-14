import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return <Typography variant='h1' sx={{ typography: 'subtitle2', fontSize: '24px' }} padding={4}>{title}</Typography>;
};

export default MainTitle;