# Hostinger — Dra. Daniely Leal

Repositório: `RodNegocios/clinica-Daniely-Leal`, branch `main`. Site estático pronto, sem comando de build ou instalação no servidor.

## Arquivos públicos

Publique somente `.htaccess`, `index.html`, `favicon.svg`, `styles.css`, `smile-scene.css`, `care-showcase.css`, `app.js`, `smile-scene.js`, `care-showcase.js` e `assets/`, com index.html diretamente em public_html. Não publique `.git`, `Conteúdo Novo`, documentação, scripts de desenvolvimento ou testes. A pasta de originais deve permanecer fora da hospedagem; publique somente as versões otimizadas selecionadas.

Prefira o ZIP público: `node prepare-hostinger.mjs /tmp/daniely-packages`. Extraia seu conteúdo diretamente em public_html. O ZIP exclui os originais e inclui apenas arquivos públicos, com integridade verificada.

Se usar a integração Git, configure a seleção dos arquivos públicos antes de ativar deploy automático. Não sincronize indiscriminadamente todo o repositório com a pasta pública. GitHub main atualizado não comprova publicação Hostinger.

## Verificação

Antes do envio: `node verify.mjs` e sintaxe dos três scripts. Depois: conferir recursos sem 404, WhatsApp, endereço, carrosséis, ampliação e vídeo avançando e voltando com scroll em desktop/mobile. O servidor precisa aceitar Range de bytes no MP4. Não adicionar compressão gzip ao MP4 nem cache imutável sem nomes versionados.

Nome profissional: Dra. Daniely Martins Leal Malaquias, CRO 3078/MS. Lista de serviços e autorizações de pacientes confirmadas pelo usuário nesta adaptação. O domínio e a conexão da Hostinger não foram fornecidos; não inventar configuração DNS/canonical.

O .htaccess de produção desabilita listagem e bloqueia metadados, scripts de desenvolvimento e materiais originais no Apache/LiteSpeed. A pasta de originais também contém sua própria regra de bloqueio. O pacote público inclui .htaccess. Regras Apache precisam ser verificadas no domínio após a implantação.
