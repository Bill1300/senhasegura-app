
<div align="center">
    <img width="100" src="https://i.imgur.com/kKnZVGK.png">
</div>

# SenhaSeguraApp

Aplicativo de armazenamento de senhas desenvolvido com React Native e Expo! Este documento fornecerá instruções detalhadas sobre como usar o aplicativo para armazenar suas senhas com segurança.

## Requisitos do Sistema

-   Suporte a biometria digital.

## Autenticação

Para entrar no aplicativo é necessário que o dispositivo tenha suporte a biometria digital, e que tenha uma digital cadastrada no sistema.

## Adicionando Senhas

1.  Na tela inicial do aplicativo, você verá uma opção para adicionar uma nova senha. Toque nessa opção.
    
2.  Você será direcionado para uma tela onde pode inserir as informações da sua senha:
    
    -   **Título da Senha**: Digite um título descritivo para a sua senha.
    -   **Descrição**: Opcionalmente, você pode adicionar uma descrição para a senha.
    -   **Senha**: Digite sua senha manualmente ou use o gerador de senhas aleatórias:
        -   Selecione o tamanho da senha desejada, usando o elemento *Slider*.
        -   Escolha se deseja incluir caracteres especiais na senha, usando o elemento *Checkbox*: "Caracteres especiais".
        - Se a senha já existir, selecione o elemento *Checkbox*: "Adicionar Senha Existente"  e insira a senha na entrada de texto abaixo do título e descrição.
3.  Após inserir as informações, toque no botão "Gerar senha" ou "Adicionar senha" para armazenar a senha.

### Gerar senha:
<div align="center">
    <img width="400" src="https://i.imgur.com/exC60cd.png">
</div>

### Adicionar senha:
<div align="center">
    <img width="400" src="https://i.imgur.com/vSY9R5o.png">
</div>
    

## Visualizando Senhas

Na tela inicial do aplicativo, selecione o icone <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/lock.svg" width="20" height="20"> para que seja apresentada a lista de senhas salvas. Para copiar a senha para a área de transferência, segure no item que deseja copiar.

<div align="center">
    <img width="400" src="https://i.imgur.com/mF7ZeDl.png">
</div>

## Exclusão de Senhas

Para excluir uma senha, segure o icone <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/trash.svg" width="20" height="20"> e confirme a exclusão.

---
### Projeto relacionado:

<div style="display: flex; align-items: center;">
    <img width="30" src="https://i.imgur.com/fJ0Ku5x.png" style="margin-right: 10px;">
    <span>Aplicativo de SenhaSegura para sistema Linux: <a href="https://github.com/bill1300/senhasegura">github.com/bill1300/senhasegura</a>.</span>
</div>
