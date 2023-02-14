import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const Subtitle: React.FC<Props> = ({ title }) => {
  return <Typography variant='h2' sx={{ typography: 'subtitle2', fontSize: '18px', padding: '1px', paddingLeft: '16px' }}>{title}</Typography>;
};

export default Subtitle;