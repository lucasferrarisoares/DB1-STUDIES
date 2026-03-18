import { useEffect, useState } from "react"
import IRestaurante from "../../interfaces/IRestaurante"
import { TableCell, Link, TableContainer, TableHead, Toolbar, Box, TableRow, Table, TableBody, Button, AppBar, Container, Typography } from "@mui/material"
import http from "../../HTTP"
import { Link as RouterLink } from 'react-router-dom'


const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const excluir = (restaurante: IRestaurante) => {
        http.delete(`restaurantes/${restaurante.id}/`)
            .then(() => {
                const ListaRestaurantes = restaurantes.filter(restauranteList => restauranteList.id !== restaurante.id)
                setRestaurantes([...ListaRestaurantes])
            })
    }

    return (

        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Typography variant='h6'>
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to='/admin/restaurantes'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to='/admin/restaurantes/novo'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Restaurante
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                None
                            </TableCell>
                            <TableCell>
                                Editar
                            </TableCell>
                            <TableCell>
                                Excluir
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantes.map(restaurante =>
                            <TableRow key={restaurante.id}>
                                <TableCell>
                                    {restaurante.nome}
                                </TableCell>
                                <TableCell>
                                    <RouterLink to={`/admin/restaurantes/${restaurante.id}`}>Editar</RouterLink>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color='error' onClick={() => excluir(restaurante)}>
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdministracaoRestaurantes