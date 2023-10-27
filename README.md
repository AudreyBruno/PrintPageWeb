# ReadMe para Captura de Tela com Puppeteer

Este script Node.js utiliza o Puppeteer, uma ferramenta de automação de navegador baseada no Chrome, para capturar screenshots de páginas da web. Os usuários podem especificar a URL a ser acessada, a resolução da tela (mobile, tablet ou desktop) e o nome do arquivo de screenshot. Este ReadMe fornece instruções sobre como usar o script e seus principais recursos.

## Pré-requisitos

Antes de usar este script, é necessário ter o Node.js e o Yarn (gerenciador de pacotes) instalados em seu sistema. Você pode baixá-los e instalá-los no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do Yarn](https://classic.yarnpkg.com/).

## Primeiros Passos

1. Clone ou baixe o repositório para a sua máquina local.

2. Abra um terminal e navegue até o diretório do projeto.

3. Instale as dependências necessárias usando o Yarn:

   ```
   yarn install
   ```

## Uso

Para capturar um screenshot de uma página da web, siga estas etapas:

1. Abra um terminal e navegue até o diretório do projeto.

2. Execute o script com o seguinte comando:

   ```
   node index.js
   ```

3. O script solicitará as seguintes informações:

   - Insira a URL que você deseja acessar.
   - Forneça um nome para o arquivo de screenshot (sem a extensão do arquivo).
   - Escolha a resolução da tela (mobile, tablet ou desktop).

4. O script capturará o screenshot, o salvará no diretório do projeto e fechará o navegador.

## Screenshots

Os screenshots serão salvos no diretório do projeto com a seguinte convenção de nomenclatura: `nome_do_arquivo_resolucao.png`. Por exemplo, se você inseriu "exemplo" como nome do arquivo e "desktop" como resolução, o screenshot será salvo como "exemplo_desktop.png".

## Tratamento de Erros

- Se uma resolução inválida for inserida, o script exibirá uma mensagem de erro e fechará o navegador.
- Se a URL especificada não for alcançável ou a página não carregar, o script poderá gerar erros. Certifique-se de que a URL seja válida e a página seja acessível.

## Informações Adicionais

- Este script destina-se a capturar páginas da web estáticas. Pode não funcionar conforme o esperado para páginas com conteúdo dinâmico ou interativo.
- Os screenshots capturados serão no formato PNG.

## Licença

Este script é de código aberto e está disponível sob a Licença MIT. Você pode encontrar informações sobre a licença no repositório do projeto.

## Aviso Legal

Use este script de forma responsável e respeite os termos de serviço e políticas de uso dos sites. É de sua responsabilidade garantir que você tenha as permissões necessárias para capturar screenshots de páginas da web.

Aproveite o uso do Capturador de Tela com Puppeteer!