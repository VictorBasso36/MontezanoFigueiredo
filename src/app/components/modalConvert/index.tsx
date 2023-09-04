"use client";
import Image from 'next/image'
import styles from './modal.module.css'
import ButtonMain from '../buttons/buttonMain';
import ButtonSupport from '../buttons/buttonSuport';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import SocialMidiaIcon from '../socialMidiaIcons';
import { useState } from 'react';

const CREATE_CONTATO = gql`
  mutation CreateContato($data: ContatoInput!) {
    createContato(data: $data) {
      data {
        attributes {
          CNPJouCPF
          Email
          Mensagem
          Nome
          Telefone
        }
      }
    }
  }
`;

export default function ModalConvert() {
    const [formData, setFormData] = useState({
        Nome: '',
        Email: '',
        Telefone: '',
        CNPJouCPF: '',
        Mensagem: '',
      });
      const [successMessage, setSuccessMessage] = useState('');
      const [createContato] = useMutation(CREATE_CONTATO);
    
      const handleFormSubmit = async (e:any) => {
        e.preventDefault();
    
        try {
          const { data } = await createContato({
            variables: {
              data: formData,
            },
          });
    
          // Faça algo com a resposta da mutação, se necessário
          console.log(data);
    
          // Limpe o formulário após o envio bem-sucedido
          setFormData({
            Nome: '',
            Email: '',
            Telefone: '',
            CNPJouCPF: '',
            Mensagem: '',
          });
          setSuccessMessage('Formulário enviado com sucesso!');
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
  return (
    <div className={styles.main} >
        <p className={styles.ptitle}><strong>-</strong>Deixe um <span>mensagem</span> para nosso time<strong>-</strong></p>
        <h2>QUAIS DESAFIOS A SUA EMPRESA VEM ENFRENTANDO <strong>ATUALMENTE ?</strong></h2>
        <p className={styles.ptitle2}>Conte com os nossos especialistas para obter um diagnóstico cortesia exclusivo que revelará oportunidades capazes de deixar a sua empresa à frente da concorrência.</p>
        <div className={styles.ContentHere}>
            <div className={styles.formHere}>
            <form onSubmit={handleFormSubmit}>
                <input
                type="text"
                required
                name="Nome"
                placeholder="Nome:"
                value={formData.Nome}
                onChange={handleInputChange}
                />
                <input
                type="email"
                name="Email"
                required
                placeholder="E-mail:"
                value={formData.Email}
                onChange={handleInputChange}
                />
                <input
                type="tel"
                required
                name="Telefone"
                placeholder="Telefone:"
                value={formData.Telefone}
                onChange={handleInputChange}
                />
                <input
                type="text"
                required
                name="CNPJouCPF"
                placeholder="CNPJ ou CPF:"
                value={formData.CNPJouCPF}
                onChange={handleInputChange}
                />
                <textarea
                name="Mensagem"
                required
                placeholder="Deixe sua mensagem:"
                value={formData.Mensagem}
                onChange={handleInputChange}
                />
                <br />
                <button className={styles.buttonmain} type="submit">
                {successMessage === '' ?
                    <>ENVIAR</>
                    :
                    <>ENVIADO</> }
                </button>
            </form>
            </div>
            <div className={styles.ContatArea}>
                <div className={styles.ContatAreaCard}>
                    <h3>Contatos</h3>
                    <button className={styles.buttonmain}>Contato <Image src={'/whatsapp.svg'} style={{marginLeft: '20px'}} width={30} height={30} alt={''}/></button>
                    {/* <a href="tel:">+55 (11) 4314-1360</a>
                    <a href="">
                        Rua Dr. Eduardo de Souza Aranha, 387 15º andar CJ 152 - Itaim Bibi - São Paulo.
                    </a> */}
                </div>
                <div className={styles.SocialMidiaCard}>
                    <h3>Social Media</h3>
                    <SocialMidiaIcon transformScale={1.3}/>
                </div>
            </div>
        </div>
    </div>
  )
}
