# Dra. Daniely Leal — site estático

A raiz é a única fonte de produção. HTML, CSS, JavaScript, GSAP e ScrollTrigger locais, sem npm, banco de dados ou build no servidor.

## Desenvolvimento

Node.js 24: `node verify.mjs`, depois `node serve.mjs` (porta 4173). Trabalhe na branch `main`, conforme solicitado. Não crie dist nem sincronize uma segunda pasta.

## Mídias e privacidade

`Conteúdo Novo/` conserva os 16 materiais originais. As versões otimizadas usadas pelo site ficam em `assets/`. O usuário confirmou autorização documentada para as fotografias de pacientes, antes/depois e da criança. O carrossel circular contém as oito montagens completas e o registro de atendimento infantil, com identificação profissional e aviso de individualidade dos resultados. Nenhum horário, avaliação, qualificação, domínio ou promessa de resultado foi inventado.

WhatsApp principal: (67) 99105-9720; contato adicional: (67) 99969-7772. Serviços e telefone principal confirmados pelo usuário.

## Vídeo cinematográfico

MP4 real, H.264, sem áudio, yuv420p, todos os quadros-chave e faststart, com versões de 1280px para desktop e 854px para mobile, derivado do vídeo fornecido. A timeline original GSAP/ScrollTrigger controla o currentTime em ambos os sentidos. Lazy loading antecipado, seeks coalescidos e respeito à preferência de movimento reduzido. Não há sequência de imagens. O poster estático é usado para movimento reduzido e enquanto carrega.

## Publicação

Veja HOSTINGER.md. O ZIP opcional é gerado com `node prepare-hostinger.mjs /tmp/daniely-packages`, com validação CRC e SHA-256. O script não publica. `prepare-vercel.mjs` é opcional e pode alterar index.html; não o execute para Hostinger.

## Testes de navegador

`node tests/browser.cjs` usa Playwright e Chromium disponíveis neste ambiente, sem dependências em produção. Inicie o servidor antes. `CHROMIUM_PATH` permite selecionar outro Chromium; `SITE_TEST_URL` seleciona o servidor de teste. Cobre 1440, 768, 390 e 320 px, vídeo nos dois sentidos e pausa, movimento reduzido, carrosséis, ampliação, serviços, menu e respostas Range. Capturas são gravadas em /tmp. Em outra máquina de testes, instale Playwright separadamente do site estático.
