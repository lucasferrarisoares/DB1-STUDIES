import { TextField, Button, Typography, Box, Container, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../HTTP"


const FormularioRestaurante = () => {

    const parametros = useParams();

    useEffect(() => {
        if (parametros.id) {
            http.get(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])
    ''
    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const onSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Restaurante atualizado com sucesso')
                })

        } else {
            http.post('restaurantes/', {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Restaurante cadastrado com sucesso')
                })
        }
    }

    return (
        <>

            <Box>
                <Container maxWidth='lg' sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                            <Typography component='h1' variant='h6'>Formulário de Restaurantes</Typography>
                            <Box component='form' sx={{ width: '100%' }}onSubmit={evento => { }}>
                                <TextField value={nomeRestaurante}
                                    id='standard-basic'
                                    label='Nome do Restaurante'
                                    variant='standard'
                                    onChange={evento => setNomeRestaurante(evento.target.value)}
                                    fullWidth
                                    required
                                />
                                <Button sx={{ marginTop: 1 }} variant='outlined' fullWidth type='submit'>Salvar</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default FormularioRestaurante