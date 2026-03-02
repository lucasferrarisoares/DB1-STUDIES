import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const [times, setTeams] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      color: '#FF8A29'
    },
  ])

  const inicial = [
    { id: uuidv4(),
      liked: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    { id: uuidv4(),
      liked: false,     nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    { id: uuidv4(),
      liked: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletCollaborator(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function changeColorTeam(color, id) {
    setTeams(times.map(time => {
      if(time.id === id) {
        time.color = color;
      }
      return time;
    }));
  }

  function toLiked(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.liked = !colaborador.liked;
      return colaborador
    }))
  }

  function registerTeam(newTeam) {
    setTeams([ ...times, {...newTeam, id: uuidv4() } ])
  }

  return (
    <div>
      <Banner />
      <Formulario
        registerTeam={registerTeam} 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            toLiked={toLiked}
            changecolor={changeColorTeam}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletCollaborator} 
          />
      )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
