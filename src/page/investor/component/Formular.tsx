/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import Lists from './formularComponent/Lists';

interface IFormular {
  setFormular: any;
}

const Formular: React.FC<IFormular> = ({ setFormular }) => {
  return (
    <div>
      <Lists setFormular={setFormular} />
    </div>
  );
};

export default Formular;
