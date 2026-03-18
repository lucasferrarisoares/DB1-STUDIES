import { useEffect, useState } from "react"
import IPrato from "../../interfaces/IPrato"
import { TableCell, Link, TableContainer, TableHead, Toolbar, Box, TableRow, Table, TableBody, Button, AppBar, Container, Typography } from "@mui/material"
import http from "../../HTTP"
import { Link as RouterLink } from 'react-router-dom'


const AdministracaoPratos = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        http.get('pratos/')
            .then(resposta => setPratos(resposta.data))
    }, [])

    const excluir = (prato: IPrato) => {
        http.delete(`pratos/${prato.id}/`)
            .then(() => {
                const ListaPratos = pratos.filter(pratoList => pratoList.id !== prato.id)
                setPratos([...ListaPratos])
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
                            <Link component={RouterLink} to='/admin/pratos'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Pratos
                                </Button>
                            </Link>
                            <Link component={RouterLink} to='/admin/pratos/novo'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Prato
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
                                Descrição
                            </TableCell>
                            <TableCell>
                                Tag
                            </TableCell>
                            <TableCell>
                                Imagem
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
                        {pratos.map(prato =>
                            <TableRow key={prato.id}>
                                <TableCell>
                                    {prato.nome}
                                </TableCell>
                                <TableCell>
                                    {prato.descricao}
                                </TableCell>
                                <TableCell>
                                    {prato.tag}
                                </TableCell>
                                <TableCell>
                                    [<a href={prato.imagem} target='blank'>ver imagem</a>]
                                </TableCell>
                                <TableCell>
                                    <RouterLink to={`/admin/pratos/${prato.id}`}>Editar</RouterLink>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color='error' onClick={() => excluir(prato)}>
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

export default AdministracaoPratos