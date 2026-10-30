# Materiais da Dra. Daniely Leal

Foram inspecionados os 15 PNGs e o MP4 de Conteúdo Novo, além do briefing fornecido. Usadas as duas fotos de retrato, foto com seringa, consultório, recepção, fachada e o vídeo do segundo bloco. A logo enviada posteriormente no chat foi preparada em versão transparente em champanhe e aplicada no cabeçalho, rodapé e favicon, acompanhada do nome profissional.

O usuário confirmou autorização documentada para as oito montagens antes/depois e a fotografia com criança, bem como a lista de serviços e o telefone principal. As montagens são preservadas inteiras, sem alteração clínica, com identificação profissional e aviso de resultados individuais, sem promessa. As galerias mantêm navegação, arco, arraste, pausa e ampliação. Não se anuncia especialização não comprovada. Horários e avaliações do Google foram omitidos por falta de dados atuais confirmados.

Vídeo: transcodificado a partir do original, sem áudio, H.264 all-intra, faststart, mesmo conteúdo e duração. Mantidos sticky, abertura cinematográfica, narrativa e scrub do ScrollTrigger. Sem sequência de imagens.

## Validação desta adaptação

- `node verify.mjs`: identidade, contatos, dados estruturados, referências locais, âncoras, IDs e estrutura de raiz aprovados.
- Sintaxe dos scripts de produção e do servidor aprovada.
- Chromium/Playwright em 1440, 768, 390 e 320 pixels: sem transbordamento horizontal ou erros JavaScript; serviços, menus, galerias, teclado, ampliação e movimento reduzido exercitados.
- Vídeo real: seeks de aproximadamente 1,8 → 9,66 → 4,24 segundos acompanhando avanço/retrocesso do scroll; pausa e retomada testadas. Versão mobile selecionada abaixo de 701 px. Não há sequência de imagens.
- Ambos os MP4 aceitam respostas 206 com intervalo de 1024 bytes. Todos os 365 quadros da versão mobile são quadros-chave; conteúdo e duração do original preservados.
- Pacote de produção: 53 arquivos, integridade CRC e SHA-256 validadas; inclui .htaccess e exclui originais/documentação/scripts de desenvolvimento.
- Servidor de desenvolvimento: bloqueio HTTP 403 para originais, metadados Git e scripts internos validado.

Limites: testes em Chromium com dimensões mobile, sem aparelho físico/iOS. A publicação, regras .htaccess, cache e entrega do MP4 na Hostinger precisam ser conferidos no domínio real após implantação; não foi fornecido acesso da hospedagem nem domínio para esse teste.

## Paleta rosa antigo

A referência de marca enviada posteriormente orientou os detalhes em rosa antigo (#b98fa3), realces claros (#e6cbd7), fundos quase brancos (#fcf8fa) e textos em grafite com leve fundo ameixa (#38313b). Títulos de destaque usam rosa mais escuro (#8b536e) para manter a leitura. A logo e o favicon recebem o mesmo tom, preservando o desenho e a transparência do símbolo. Layout e animações permanecem inalterados.
