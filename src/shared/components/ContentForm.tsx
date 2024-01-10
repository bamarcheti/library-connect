import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import Subtitle from './Subtitle';

type Props = {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
};

const ContentForm: React.FC<Props> = ({ children, onClick, title }) => {
  return (
    <Card style={{ width: 'auto', height: 'auto' }} className="form">
      <CardContent>
        <Subtitle title={title} />

        <Grid container direction="column" padding={2} spacing={1}>
          {children}
        </Grid>

        <CardActions>
          <div className="container-button">
            <Button variant="text" size="small" onClick={onClick}>
              Salvar
            </Button>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ContentForm;
