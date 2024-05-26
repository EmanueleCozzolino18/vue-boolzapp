"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      currentContact: 0,
      contacts: [
        {
          name: "Antonio",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai fatto il corso?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "sto tornando a casa",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Si",
              status: "received",
            },
          ],
        },
        {
          name: "Giuseppe",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Tutto bene?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Si grazie, sono solo indaffarato con il lavoro",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Ti capisco, non vedo l'ora di andare in ferie!",
              status: "sent",
            },
          ],
        },
        {
          name: "Marco",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "Buonasera, sto rientrando dal lavoro pendiamo il caffè?",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Si sto rientrando anche io, solito bar?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Si ci vediamo li!",
              status: "received",
            },
          ],
        },
        {
          name: "Luigi.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Sta sera che fai?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Penso che andrò al ristorante",
              status: "received",
            },
          ],
        },
        {
          name: "Sandro",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati che domani è la festa di riccardo",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si ho anche preso il personaggio",
              status: "received",
            },
          ],
        },
        {
          name: "Antonella",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai ancora la maglia che ti ho regalato?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Non la indossi da un pò",
              status: "sent",
            },
          ],
        },
        {
          name: "Giorgio",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Sono stanca ci vediamo domani",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Anche io non esco tranquillo!",
              status: "received",
            },
          ],
        },
        {
          name: "Dalila",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Andiamo a cena fuori?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si solo se andiamo a mangiare la pizza!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
}).mount("#app");
