import { TextField, Button, Typography, Box, Container, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../HTTP"
import ITag from "../../interfaces/ITag"
import IRestaurante from "../../interfaces/IRestaurante"


const FormularioPrato = () => {

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tag, setTag] = useState('') 
    const [restaurante, setRestaurante] = useState('')

    const [imagem, setImagem] = useState<File |null>(null)

    const [tags, setTags] = useState<ITag[]>([])
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get< { tags: ITag[] } > ('tags/')
            .then(resposta => setTags(resposta.data.tags))
        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    const onSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('nome', nomePrato)
        formData.append('descricao', descricao)
        formData.append('tag', tag)
        formData.append('retaurante', restaurante)
        
        if (imagem) {
            formData.append('imagem', imagem)
        }

        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
        .then(() => {
            setNomePrato('')
            setTag('')
            setDescricao('')
            setRestaurante('')
            alert('Prato cadastrado com sucesso!')
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <Box>
                <Container maxWidth='lg' sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                            <Typography component='h1' variant='h6'>Formulário de Pratoss</Typography>
                            <Box component='form' sx={{ width: '100%' }}onSubmit={evento => { }}>
                                <TextField value={nomePrato}
                                    id='standard-basic'
                                    label='Nome do Prato'
                                    variant='standard'
                                    onChange={evento => setNomePrato(evento.target.value)}
                                    fullWidth
                                    required
                                    margin='dense'                                />
                                <TextField value={descricao}
                                    id='standard-basic'
                                    label='Descrição do Prato'
                                    variant='standard'
                                    onChange={evento => setDescricao(evento.target.value)}
                                    fullWidth
                                    required
                                    margin='dense'
                                />

                                <FormControl margin='dense' fullWidth>
                                    <InputLabel id='select-tag'></InputLabel>
                                    <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                                        {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                                            {tag.value}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>
                                <FormControl margin='dense' fullWidth>
                                    <InputLabel id='select-restaurante'></InputLabel>
                                    <Select labelId="select-restaurante" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
                                        {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                                            {restaurante.nome}
                                        </MenuItem>)}
                                    </Select>

                                    <input type='file' onChange={selecionarArquivo}/>

                                </FormControl>
                                <Button sx={{ marginTop: 1 }} variant='outlined' fullWidth type='submit'>Salvar</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default FormularioPrato