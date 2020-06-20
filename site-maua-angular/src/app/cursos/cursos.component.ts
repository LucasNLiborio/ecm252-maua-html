import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  cursos = [
    {
      nome: 'Administração',
      descricao:
        ' Administrador Mauá é um profissional preparado para atuar, sempre como líder, nos mais diversos mercados de trabalho: instituições financeiras, empresas de serviços, consultorias, comércio varejista ou atacadista e indústrias de diversos segmentos.',
      url:
      'https://maua.br/img/upload/092018/administracao-14102942.png'
    },
    {
      nome: 'Design',
      descricao:
        'O curso é totalmente voltado para a prática, com o desenvolvimento de projetos em todos os semestres, do início ao fim. Todos eles são desenvolvidos com empresas parceiras de diversos setores  que trazem para a academia problemas reais do mercado que serão solucionados por equipes de alunos e professores criativos e competentes.',
      url:
        'https://maua.br/img/upload/092018/design-14102950.png'
      },
    {
      nome: 'Engenharia de Alimentos',
      descricao:
        'A graduação em Engenharia de Alimentos da Mauá oferece um intenso programa prático que leva o aluno desde as primeiras séries para os laboratórios didáticos e de pesquisa e de processamento em pequena escala. O campus conta ainda com uma instalação semi-industrial capaz de simular a produção de diversos produtos, semelhante ao que fazem as indústrias de alimentos.               ',
      url:
        'https://maua.br/img/upload/092018/engenharia-alimentos-14103003.png'
    },
    {
      nome: 'Engenharia Civil',
      descricao:
        'O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios residenciais, ferrovias, aeroportos ou faça o planejamento de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções. ',
      url:
        'https://maua.br/img/upload/092018/engenharia-civil-14103012.png'
    },
    {
      nome: 'Engenharia da Computação',
      descricao:
        'A graduação em Engenharia de Computação da Mauá oferece aos alunos uma formação com base nos conceitos fundamentais da Engenharia, até a formação especializada em Sistemas Embarcados, Software, Infraestrutura e Segurança, Ciência de Dados e suas inter-relações',
      url:
        'https://maua.br/img/upload/092018/engenharia-computacao-14103023.png'
    },
    {
      nome: 'Engenharia de Controle e Automação',
      descricao:
        'A formação em Engenharia de Controle e Automação da Mauá  prepara o aluno para o uso de máquinas e conhecimento sobre os processos de fabricação, da Engenharia Eletrônica e da Ciência da Computação, além das suas aplicações em controle de processos e automação industrial.',
      url:
        'https://maua.br/img/upload/092018/engenharia-controle-automacao-14103035.png'
    },
    {
      nome: 'Engenharia Elétrica',
      descricao:
        'A Mauá oferece a seu aluno de Engenheira Elétrica uma formação que, além de fortemente alicerçada nos conceitos fundamentais da Engenharia, permeia e entrelaça as áreas de Conversão de Energia, Regulamentação, Proteção, Distribuição e Energias Alternativas.',
      url:
        'https://maua.br/img/upload/092018/engenharia-eletrica-14103052.png'
    },
    {
      nome: 'Engenharia Eletrônica',
      descricao:
        'A Mauá oferece a seu aluno de Engenheira Eletrônica uma formação com base nos conceitos fundamentais da Engenharia com as áreas de Telecomunicações, Sistemas Computacionais, Eletrônica e Automação de Processos Industriais. Embora científica e tecnológica, a formação também valoriza os aspectos humanísticos e sociais que tornam o profissional um elemento de atuação diferenciada para a sociedade.',
      url:
        'https://maua.br/img/upload/092018/engenharia-eletronica-14103106.png'
    },
    {
      nome: 'Engenharia Mecânica',
      descricao:
        'A graduação em Engenharia Mecânica é uma das mais abrangentes modalidades da Engenharia. Ela trata de tudo o que se move, de brinquedos a fábricas (com tudo o que está dentro), passando por eletrodomésticos, embarcações, veículos etc. Além disso, ela trata de instalações de conversão de energia como hidroelétricas e termoelétricas, instalações de ar-condicionado, de geração de vapor e frigoríficas.',
      url:
        'https://maua.br/img/upload/102018/engenharia-mecanica-18154700.png'
    },
    {
      nome: 'Engenharia de Produção',
      descricao:
        'Infraestrutura de ponta, profissionais reconhecidos num curso bem-conceituado. Essa é a graduação em Engenharia de Produção da Mauá, ideal para um futuro de sucesso!',
      url:
        'https://maua.br/img/upload/102018/engenharia-producao-18154849.png'
    },
    {
      nome: 'Engenharia Química',
      descricao:
        'O Engenheiro Químico pode atender várias áreas de atuação, como engenheiro de: projeto, produto, processo, produção, desenvolvimento, manutenção, segurança, qualidade, aplicações, assistência técnica, suprimentos e vendas; diversos cargos em nível de gerência, pesquisador e professor.',
      url:
        'https://maua.br/img/upload/092018/engenharia-quimica-14103146.png'
    }


  ];

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }
}
