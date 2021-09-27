import React from 'react'
import {FaFacebook, FaInstagram,FaWhatsapp } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'Sobre nosotros',
  },
  {
    id: 3,
    url: '/projects',
    text: 'tarifas',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contacto',
  },
]

export const socialIcons = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook size={24} />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com',
    icon: <FaInstagram size={24}/>,
  },
  {
    id: 3,
    url: 'https://www.whatsapp.com',
    icon: <FaWhatsapp size={24}/>,
  },
]


export const tarifas = [
  {
    id:1,
    title: "Tarifa express",
    body: "Paga sólo por lo que traigas. Cobramos en base al peso de tu mercancía y no sobre el valor de la misma. No cobramos anualidad ni mensualidad.",
    priceTitle: "PESO POR LIBRA",
    tarifa: "$2.45 x lb"
  },
  {
    id:2,
    title: "Tarifa maritima",
    body: "Paga sólo por lo que traigas. Cobramos en base al peso de tu mercancía y no sobre el valor de la misma. No cobramos anualidad ni mensualidad.",
    priceTitle: "PESO POR LIBRA",
    tarifa: "$1.75 x lb"
  },
]

export const informacion = [
  {
    id: 1,
    title: "Tarifas Competitivas",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
  },
  {
    id: 2,
    title: "Confianza Y Puntualidad",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 3,
    title: "Solo Peso Real",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
]