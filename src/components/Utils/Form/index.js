import React from 'react';
import { InputText } from "../InputText";
import { InputSelect } from "../InputSelect";

export const Form = () => {

  return (
      <div className="mb-3">
        <InputText id="name"
                   name="name"
                   label="Nom"
                   type="text"
                   placeholder="Saisir votre nom" />
        <InputText id="description"
                   name="description"
                   label="Description"
                   type="text"
                   placeholder="Saisir votre description" />
        <InputSelect id="type"
                     name="type"
                     label="Type"
                     defaultValue="---" />
      </div>
  );
};
