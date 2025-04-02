import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_kz8hybk';
    const templateId = 'template_8jaiuyg';
    const publicKey = 'Kcf3ZRVV4l2JA_jvv';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Masse BATEKE test',
      to_email: 'masse.bateke@epitech.eu',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setConfirmation('Votre message a bien été envoyé !');
        setTimeout(() => setConfirmation(''), 3000); 
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='emailForm'>
        <input
        required
          type="text"
          placeholder="Votre Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        required
          type="email"
          placeholder="Votre Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
        required
          cols="30"
          rows="10"
          placeholder="Votre message ici..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label>
      <input type="checkbox" required></input>
      J'accepte que mes informations soient utilisées uniquement pour être recontacté(e). 
    </label>
        <button type="submit">Envoyez</button>
      </form>
      {confirmation && <p className='confirmation-message'>{confirmation}</p>}
    </div>
  );
};

export default EmailForm;
