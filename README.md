# Bispo Reforma

Landing page da **Bispo Reforma**, criada para apresentar os serviços de construção e reforma e facilitar o contato de clientes interessados em solicitar um orçamento.

## Funcionalidades

- Apresentação da empresa e dos serviços de construção e reforma.
- Vídeo de fundo e elementos visuais da marca.
- Formulário de orçamento em janela modal, com campos para nome, e-mail, endereço, telefone e descrição do projeto.
- Envio dos dados preenchidos para o aplicativo de e-mail do visitante, usando `mailto:`.
- Atalho flutuante para iniciar uma conversa pelo WhatsApp.
- Fechamento do formulário pelo botão, clicando fora da janela ou pressionando `Esc`.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Google Fonts

## Como visualizar

Não é necessário instalar dependências. Clone ou baixe este repositório e abra `HTML/index.html` em um navegador.

Para executar um servidor local, abra o terminal na pasta do projeto e rode:

```bash
python -m http.server 8000
```

Depois, acesse [http://localhost:8000/HTML/](http://localhost:8000/HTML/) no navegador.

## Estrutura do projeto

```text
├── assets/          # Imagens, ícones, logo, animação e vídeo
├── CSS/
│   └── style.css    # Estilos e layout
├── HTML/
│   └── index.html   # Estrutura da página
└── JS/
    └── script.js    # Modal e envio do formulário por e-mail
```

## Contato

O formulário prepara uma mensagem para **BISPOREFORMA@GMAIL.COM** no aplicativo de e-mail configurado no dispositivo. O botão do WhatsApp direciona para o contato comercial da Bispo Reforma.
