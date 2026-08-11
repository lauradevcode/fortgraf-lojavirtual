# FortGraf - loja virtual

Prompt para Lovable — Site Institucional FortGraf + Loja Virtual (MVP funcional)

Cole o texto abaixo inteiro no Lovable, em uma única mensagem.

Crie um site institucional para a FortGraf — Com. Gráfica e Editora, gráfica de São Luís (MA), replicando fielmente o layout real do site atual deles (fortgraf.ind.br), mas com acabamento um pouco mais refinado. NÃO use um template genérico de landing page de IA (nada de cards com radio button, nada de layout "SaaS moderno" padrão). Siga a estrutura, ordem de seções e tom visual descritos abaixo.

1. Identidade visual

Logo: "FORT" em preto + ícone quadrado nas cores ciano, magenta, amarelo e preto (estilo CMYK, remetendo a impressão gráfica) + "COM. GRÁFICA E EDITORA"

Paleta: azul royal forte (#1A3FE0 aprox.) como cor primária, branco, preto para texto, e os 4 tons CMYK (ciano #00AEEF, magenta #EC008C, amarelo #FFD400, preto) como acentos pontuais (ícones, detalhes)

Tipografia: sans-serif bold para títulos grandes, moderna e sólida (nada fina/delicada) — remete a indústria/produção, não a startup fofa

Fundo com leve textura/gradiente diagonal nas seções de destaque (hero), como no original

2. Header

Logo à esquerda

Menu horizontal à direita: Página Inicial | Serviços | Produtos | Parceiros

Fixo no topo, fundo branco/transparente

3. Seção Hero (topo)

Fundo com foto de operário trabalhando em máquina de impressão, com overlay diagonal azul

Texto grande à esquerda: "PRODUÇÃO EM ATÉ 2 DIAS ÚTEIS" + "GRANDES e pequenos FORMATOS"

Selo/telefone de contato "DÚVIDAS E ORÇAMENTOS (98) 3222-7139" em destaque

Logo grande da FortGraf sobreposta à direita

4. Seção "Gráfica em São Luís é aqui!"

Foto aérea da cidade de São Luís como fundo full-width

Overlay escuro, texto branco centralizado: título + frase sobre reconhecimento pela experiência e capacidade de impressão

Botão "Fale conosco"

5. Seção Comunicação Visual

Duas colunas: texto à esquerda (título "Surpreenda seu público e eleve o valor da sua marca com projetos diferenciados" + parágrafo sobre impressão digital, fachadas, adesivação) e grid de 4 fotos à direita (equipe trabalhando, produção)

Contadores em destaque: "+147 Clientes Satisfeitos" / "+271 Projetos Entregues" / anos de experiência

Botão "Fale conosco"

6. Seção Objetivos / Diferencial

3 colunas com ícone + título + texto curto: Objetivos, Metas (ou similar), Diferencial — foco em atender pequenas e grandes empresas com qualidade e menor custo

7. Seção "Como podemos te ajudar?" (fundo azul sólido)

Título centralizado em branco

4 botões/cards brancos lado a lado (vazios de texto no site original — você pode preencher com: Impressão Digital, Comunicação Visual, Fachadas, Materiais de Campanha)

8. Seção "Nossos produtos" — ESSA VIRA A LOJA VIRTUAL

Aqui está a parte mais importante. Mantenha o visual de grid de ícones (Cartões de Visita, Banners, Envelopes, Convites, Catálogos, Adesivos, Carimbos), mas cada card agora é clicável e leva para uma vitrine de loja virtual funcional. Construa o fluxo completo abaixo:

8.1 Vitrine de produtos (/produtos)

Grid de produtos com: foto/ícone, nome, descrição curta, preço a partir de, botão "Ver detalhes"

Produtos (crie com dados realistas de gráfica):

Cartão de Visita (preço por 1000 unidades, opções de papel: couché 300g / verniz local)

Banner (preço por m², opção de tamanho)

Envelope personalizado (preço por 100 unidades)

Convite personalizado (preço por unidade, opção de acabamento)

Catálogo (preço por unidade, opção de nº de páginas)

Adesivo (preço por m² ou por unidade, opção de material vinil/papel)

Carimbo (preço por unidade, opção de tamanho)

Filtro simples por categoria no topo da vitrine

8.2 Página de produto (/produtos/:id)

Foto grande, nome, descrição completa

Seletor de variação (papel/tamanho/material, conforme o produto)

Seletor de quantidade (input numérico)

Preço recalculado dinamicamente (quantidade × valor unitário, ou m² × valor)

Botão "Adicionar ao carrinho"

8.3 Carrinho (/carrinho)

Lista de itens adicionados com nome, variação escolhida, quantidade, subtotal

Opção de remover item / editar quantidade

Total geral calculado automaticamente

Botão "Finalizar pedido"

8.4 Checkout simulado (/checkout)

Formulário: Nome completo, E-mail, Telefone/WhatsApp, Endereço (opcional), Observações

Resumo do pedido ao lado (itens + total)

Botão "Confirmar pedido" — ao clicar, simula o envio (sem gateway de pagamento real) e mostra uma tela de confirmação: "Pedido recebido! Nº do pedido: #0001. Entraremos em contato pelo WhatsApp/e-mail informado."

Guarde o pedido em estado local (ou Supabase se disponível) para o MVP funcionar de ponta a ponta

9. Seção "Nossos parceiros"

Grid de logos em escala de cinza/coloridos, título "Nossos parceiros" + texto curto sobre parcerias

10. Seção "Faça seu orçamento agora"

Fundo branco, formulário com: Nome, E-mail, Telefone/WhatsApp, Anexo de arquivo, Mensagem

Texto "ganhe 10% de desconto no seu orçamento"

Botão "Enviar"

Mantenha esse formulário separado da loja virtual — ele continua sendo o canal para orçamentos personalizados/grandes volumes, enquanto a loja é para pedidos padronizados e diretos

11. Footer

Fundo azul escuro

Coluna com logo + nome completo + endereço + horário de funcionamento + telefone + e-mail

Coluna com mapa/localização (pode ser um embed genérico do Google Maps)

Ícones de redes sociais

Linha de copyright

12. Requisitos técnicos obrigatórios

100% responsivo (mobile, tablet, desktop) — teste especialmente a vitrine e o carrinho em mobile

MVP funcional de ponta a ponta: navegar produtos → adicionar ao carrinho → editar carrinho → checkout → confirmação, tudo funcionando de verdade com estado (React state ou Supabase)

Sem gateway de pagamento real — é uma simulação de compra

Sem placeholders quebrados: todo produto precisa ter preço, descrição e imagem (pode usar imagens de banco de imagens gratuito compatíveis com gráfica/impressão)

Não usar layout genérico de IA (nada de cards com radio, nada de hero centralizado padrão "SaaS") — seguir fielmente a estrutura de seções descrita acima, que é o layout real da empresaPrompt para Lovable — Site Institucional FortGraf + Loja Virtual (MVP funcional)

Cole o texto abaixo inteiro no Lovable, em uma única mensagem.

Crie um site institucional para a FortGraf — Com. Gráfica e Editora, gráfica de São Luís (MA), replicando fielmente o layout real do site atual deles (fortgraf.ind.br), mas com acabamento um pouco mais refinado. NÃO use um template genérico de landing page de IA (nada de cards com radio button, nada de layout "SaaS moderno" padrão). Siga a estrutura, ordem de seções e tom visual descritos abaixo.

1. Identidade visual

Logo: "FORT" em preto + ícone quadrado nas cores ciano, magenta, amarelo e preto (estilo CMYK, remetendo a impressão gráfica) + "COM. GRÁFICA E EDITORA"

Paleta: azul royal forte (#1A3FE0 aprox.) como cor primária, branco, preto para texto, e os 4 tons CMYK (ciano #00AEEF, magenta #EC008C, amarelo #FFD400, preto) como acentos pontuais (ícones, detalhes)

Tipografia: sans-serif bold para títulos grandes, moderna e sólida (nada fina/delicada) — remete a indústria/produção, não a startup fofa

Fundo com leve textura/gradiente diagonal nas seções de destaque (hero), como no original

2. Header

Logo à esquerda

Menu horizontal à direita: Página Inicial | Serviços | Produtos | Parceiros

Fixo no topo, fundo branco/transparente

3. Seção Hero (topo)

Fundo com foto de operário trabalhando em máquina de impressão, com overlay diagonal azul

Texto grande à esquerda: "PRODUÇÃO EM ATÉ 2 DIAS ÚTEIS" + "GRANDES e pequenos FORMATOS"

Selo/telefone de contato "DÚVIDAS E ORÇAMENTOS (98) 3222-7139" em destaque

Logo grande da FortGraf sobreposta à direita

4. Seção "Gráfica em São Luís é aqui!"

Foto aérea da cidade de São Luís como fundo full-width

Overlay escuro, texto branco centralizado: título + frase sobre reconhecimento pela experiência e capacidade de impressão

Botão "Fale conosco"

5. Seção Comunicação Visual

Duas colunas: texto à esquerda (título "Surpreenda seu público e eleve o valor da sua marca com projetos diferenciados" + parágrafo sobre impressão digital, fachadas, adesivação) e grid de 4 fotos à direita (equipe trabalhando, produção)

Contadores em destaque: "+147 Clientes Satisfeitos" / "+271 Projetos Entregues" / anos de experiência

Botão "Fale conosco"

6. Seção Objetivos / Diferencial

3 colunas com ícone + título + texto curto: Objetivos, Metas (ou similar), Diferencial — foco em atender pequenas e grandes empresas com qualidade e menor custo

7. Seção "Como podemos te ajudar?" (fundo azul sólido)

Título centralizado em branco

4 botões/cards brancos lado a lado (vazios de texto no site original — você pode preencher com: Impressão Digital, Comunicação Visual, Fachadas, Materiais de Campanha)

8. Seção "Nossos produtos" — ESSA VIRA A LOJA VIRTUAL

Aqui está a parte mais importante. Mantenha o visual de grid de ícones (Cartões de Visita, Banners, Envelopes, Convites, Catálogos, Adesivos, Carimbos), mas cada card agora é clicável e leva para uma vitrine de loja virtual funcional. Construa o fluxo completo abaixo:

8.1 Vitrine de produtos (/produtos)

Grid de produtos com: foto/ícone, nome, descrição curta, preço a partir de, botão "Ver detalhes"

Produtos (crie com dados realistas de gráfica):

Cartão de Visita (preço por 1000 unidades, opções de papel: couché 300g / verniz local)

Banner (preço por m², opção de tamanho)

Envelope personalizado (preço por 100 unidades)

Convite personalizado (preço por unidade, opção de acabamento)

Catálogo (preço por unidade, opção de nº de páginas)

Adesivo (preço por m² ou por unidade, opção de material vinil/papel)

Carimbo (preço por unidade, opção de tamanho)

Filtro simples por categoria no topo da vitrine

8.2 Página de produto (/produtos/:id)

Foto grande, nome, descrição completa

Seletor de variação (papel/tamanho/material, conforme o produto)

Seletor de quantidade (input numérico)

Preço recalculado dinamicamente (quantidade × valor unitário, ou m² × valor)

Botão "Adicionar ao carrinho"

8.3 Carrinho (/carrinho)

Lista de itens adicionados com nome, variação escolhida, quantidade, subtotal

Opção de remover item / editar quantidade

Total geral calculado automaticamente

Botão "Finalizar pedido"

8.4 Checkout simulado (/checkout)

Formulário: Nome completo, E-mail, Telefone/WhatsApp, Endereço (opcional), Observações

Resumo do pedido ao lado (itens + total)

Botão "Confirmar pedido" — ao clicar, simula o envio (sem gateway de pagamento real) e mostra uma tela de confirmação: "Pedido recebido! Nº do pedido: #0001. Entraremos em contato pelo WhatsApp/e-mail informado."

Guarde o pedido em estado local (ou Supabase se disponível) para o MVP funcionar de ponta a ponta

9. Seção "Nossos parceiros"

Grid de logos em escala de cinza/coloridos, título "Nossos parceiros" + texto curto sobre parcerias

10. Seção "Faça seu orçamento agora"

Fundo branco, formulário com: Nome, E-mail, Telefone/WhatsApp, Anexo de arquivo, Mensagem

Texto "ganhe 10% de desconto no seu orçamento"

Botão "Enviar"

Mantenha esse formulário separado da loja virtual — ele continua sendo o canal para orçamentos personalizados/grandes volumes, enquanto a loja é para pedidos padronizados e diretos

11. Footer

Fundo azul escuro

Coluna com logo + nome completo + endereço + horário de funcionamento + telefone + e-mail

Coluna com mapa/localização (pode ser um embed genérico do Google Maps)

Ícones de redes sociais

Linha de copyright

12. Requisitos técnicos obrigatórios

100% responsivo (mobile, tablet, desktop) — teste especialmente a vitrine e o carrinho em mobile

MVP funcional de ponta a ponta: navegar produtos → adicionar ao carrinho → editar carrinho → checkout → confirmação, tudo funcionando de verdade com estado (React state ou Supabase)

Sem gateway de pagamento real — é uma simulação de compra

Sem placeholders quebrados: todo produto precisa ter preço, descrição e imagem (pode usar imagens de banco de imagens gratuito compatíveis com gráfica/impressão)

Não usar layout genérico de IA (nada de cards com radio, nada de hero centralizado padrão "SaaS") — seguir fielmente a estrutura de seções descrita acima, que é o layout real da empresa

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/53b8129e-b1b6-43a7-8c53-34def4663eff).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
