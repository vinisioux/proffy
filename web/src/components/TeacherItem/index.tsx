import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4'
          alt='Vinicius Leonardo'
        />
        <div>
          <strong>Vinicius Leonardo</strong>
          <span>LoL</span>
        </div>
      </header>

      <p>
        Apenas não sou profissional no LoL por opção.
        <br /> <br />
        Sou conhecido como o melhor ADC não só do mundo mas como do Brasil
        também.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 69,20</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
