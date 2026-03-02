import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, changecolor, toLiked }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.color, '0.6') }}>
            <input onChange={event => changecolor(event.target.value, time.name)} value={time.color} type='color' className='input-color' />
            <h3 style={{ borderColor: time.color }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>  {
                    return (<Colaborador 
                        key={indice} 
                        colaborador={colaborador} 
                        corDeFundo={time.color} 
                        aoDeletar={aoDeletar}
                        toLiked={toLiked} />)
                    }
                )}
            </div>
        </section>
    )
}

export default Time