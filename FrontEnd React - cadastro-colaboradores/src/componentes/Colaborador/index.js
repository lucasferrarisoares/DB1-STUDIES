import './colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, toLiked }) => {
    function liked() {
        toLiked(colaborador.id);
    }

    const propsLike = {
        size: 25,
        onClick: liked,

    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className='delet' 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='liked'>
                {colaborador.liked 
                ? <AiFillHeart {...propsLike} color='#ff0000'/>  
                : <AiOutlineHeart {...propsLike}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador