/* eslint-disable react/jsx-filename-extension */

import { BottomNavigation, BottomNavigationAction, Card, CardActions, CardContent, Grid, ListItem, ListItemAvatar, ListItemText, Button, List, Stack, TextField, Typography, useMediaQuery, useTheme, Divider, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useAppThemeContext } from '../../contexts';
import React from 'react';
import { GlobalStyles } from '@mui/styled-engine';


interface IMenuTopoProps {
  children: React.ReactNode;
}

interface Column {
  id: 'nome' | 'qtdLivros';
  label: string;
  minWidht?: number;
  align?: 'right';
  format?: (value: number) => string; 
}

const columns: readonly Column[] = [
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'qtdLivros', label: 'Quantidade de livros', minWidth: 100 },
];

interface Data {
  nome: string;
  qtdLivros: number;
}

function createData(
  nome: string,
  qtdLivros: number,
): Data {
  
  return { nome, qtdLivros };
}

const rows = [
  createData('Robert C. Martin', 4),
  createData('Autor', 5),
  createData('Autor 2', 2),
  createData('Martin Fowler', 1),
  createData('Michael Feathers', 7),
  createData('Kent Beck', 3),
  createData('Erich Gama', 4),
  createData('Loiane', 9),
];


export const MenuTopo: React.FC<IMenuTopoProps> = ({ children }) => {
  const theme = useTheme();

  const { toggleTheme } = useAppThemeContext();

  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ 
          background: '#25B79D',
          fontFamily: 'Roboto',
          width: '100%',
        }}
      >
        <Stack>
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Stack>
        <BottomNavigationAction label="AUTORES" />
        <BottomNavigationAction label="LIVROS" />
      </BottomNavigation>

      <React.Fragment>
        <GlobalStyles 
          styles={{ 
            h1: { 
              color: '#4F4F4F',
              fontFamily: 'Roboto',
              fontSize: '25px'
            } 
          }} 
        />
        <h1>GERENCIAR AUTORES</h1>
      </React.Fragment>

      <Grid sx={{ width: '100%' }} container spacing={2}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontFamily="Roboto" fontSize="14px">
                  CRIAR NOVO AUTOR
                </Typography>
                <TextField
                  id="outlined-helperText"
                  label="Nome do Autor"
                  defaultValue="Robert C. Martin"
                />
              </CardContent>
              <CardActions>
                <Stack>
                  <Button variant="contained" size="small">Salvar</Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {' — I\'ll be in your neighborhood doing errands this…'}
                      </React.Fragment>
                    }
                  />
                </ListItemAvatar>
              </ListItem>

              <Divider variant="inset" component="li" />
              
              <ListItem>
                <ListItemAvatar>
                  
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>


            {/* <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidht }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer> */}
          </Grid>
        </Grid>
      </Grid>

      {/* <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box> */}
    </>
  );
};