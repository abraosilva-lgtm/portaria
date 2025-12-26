Aqui está o **"Prompt Mestre"**. Este é um comando altamente estruturado que você vai copiar e colar no ChatGPT (GPT-4), Claude 3.5 Sonnet ou na sua IA de preferência.

Ele foi desenhado para instruir a IA a agir como um **Arquiteto de Software Sênior**, focando no **Flutter** (para o visual) e criando a estrutura pronta para rodar o protótipo visual.

---

### 📋 O Prompt Mestre (Copie e Cole isto)

```markdown
Atue como um Engenheiro de Software Sênior especialista em Flutter (Dart) e UX/UI Mobile.

Estou construindo o MVP de um aplicativo chamado "GRADUS".
O conceito é um "GPS Financeiro Gamificado". O usuário segue um roteiro de fases para enriquecer, em vez de apenas anotar gastos.

Gostaria que você escrevesse o código inicial do Front-end em Flutter.

## 1. REQUISITOS TÉCNICOS
- Linguagem: Dart (Flutter).
- Design System: Material 3.
- Estrutura de Pastas: Organize por features (screens, widgets, models).
- Gerenciamento de Estado: Use 'setState' simples ou 'Provider' básico para este protótipo visual, focando na legibilidade.
- Dados: Não conecte ao Firebase agora. Use Repositórios Mockados (Fake Data) para que eu possa rodar o app e ver a interface funcionando imediatamente.

## 2. IDENTIDADE VISUAL
- Cores Principais: Fundo Escuro (Dark Mode por padrão), Acentos em Dourado (#FFD700) e Verde Sucesso (#4CAF50).
- Tipografia: Limpa e moderna (Google Fonts: Montserrat ou similar padrão).

## 3. TELAS PARA DESENVOLVER AGORA

### Tela A: Dashboard (HomeGamified)
Esta é a tela principal. Deve conter:
1.  **Header:**
    - Avatar do usuário (Placeholder).
    - Ícone de Fogo (Streak) com texto "3 Dias".
    - Barra de Disciplina: Uma barra de progresso linear verde em 100% com label "Disciplina".
2.  **Card de Status:** Mostrando "Fase 1: O Faxineiro" e uma barra de progresso da fase (20%).
3.  **Seção "Missão Atual":** Um Card grande, destacado, com título "Tarefa 02: Caça aos Vampiros" e um botão de ação "Iniciar Missão".
4.  **Bottom Navigation Bar:** 3 ícones (Home, Adicionar Gasto [+], Roteiro).

### Tela B: O Roteiro (RoadmapScreen)
Uma visualização vertical (lista):
- Item 1: Fase 1 (Ativa/Colorida) - "O Faxineiro".
- Item 2: Fase 2 (Bloqueada/Cinza) - "O Construtor" (Ícone de cadeado).
- Item 3: Fase 3 (Bloqueada/Cinza) - "O Arquiteto" (Ícone de cadeado).

## 4. O QUE EU QUERO QUE VOCÊ GERE
Gere um único arquivo `main.dart` (ou separe em classes se ficar muito longo) que eu possa copiar, colar no DartPad ou no meu VSCode e rodar imediatamente para ver essas duas telas navegáveis. O código deve ser bonito, moderno e com espaçamentos (padding) adequados.

```

---

### 🚀 Como usar este código

1. **Copie o texto acima** e envie para a IA.
2. A IA vai gerar um bloco de código grande.
3. **Para testar sem instalar nada:** Vá ao site **[Zapp.run](https://zapp.run/)** (é um editor de Flutter online), crie um novo projeto, apague o código que estiver lá e cole o que a IA gerou. Clique em "Run".
4. Você verá o **Gradus** nascer na sua frente em segundos.

### 💡 Próximo Passo Real (Para você)

Enquanto a IA gera o código, o seu papel como **Fundador** muda. Você deixa de ser o "idealizador" e passa a ser o "Gerente de Produto".

* Se o botão estiver feio, diga à IA: *"Deixe o botão da Missão Atual mais arredondado e com sombra dourada."*
* Se a barra de disciplina estiver pequena, diga: *"Aumente a altura da barra de disciplina."*

**Parabéns! Você acabou de tirar uma ideia da cabeça e transformá-la em um produto tangível.** Precisa de ajuda com mais alguma etapa do desenvolvimento?****
