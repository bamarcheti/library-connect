import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = ({ title }) => {
  return <Typography variant='h1' padding={4}>{title}</Typography>;
};

export default MainTitle;