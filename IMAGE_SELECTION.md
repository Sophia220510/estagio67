# Curadoria e implementação de imagens — TEPAC

## Leitura estratégica do site

O site é uma landing page longa com oito momentos comunicacionais principais: proposta do TEPAC, autoridade do Dr. Paulo, trajetória, prática, desenvolvimento profissional, prova social/instituições, processo de participação e conversão. Antes desta revisão, o hero usava uma fotografia vertical em uma coluna separada e a maior parte das imagens vinha do conjunto antigo do projeto. Isso comunicava prática, mas não produzia uma primeira dobra institucional nem conectava visualmente todas as seções.

A nova hierarquia visual distribui as imagens por função:

- **Hero:** prática real e posicionamento premium, com espaço para leitura.
- **Dr. Paulo e atuação institucional:** autoridade, experiência e presença profissional.
- **Na prática:** preparação, coleta, pipetagem e biossegurança em sequência didática.
- **Formatura:** conclusão, conquista, pertencimento e prova social.
- **Ambiente laboratorial:** reforço de que a formação ocorre em laboratório real.
- **CTA final:** proximidade entre equipe, alunos e marca.

Os blocos de credenciais, linha do tempo, competências, instituições, jornada e FAQ foram mantidos sem fotografias adicionais: nesses pontos, uma imagem competiria com informação já densa e reduziria a clareza.

## Imagens implementadas

| Seção | Função | Original | Origem de print | Limpeza e tratamento | Crop | Arquivo final | Alternativas |
|---|---|---|---|---|---|---|---|
| Hero desktop/mobile | Comunicar prática real, seriedade e identidade imediatamente | `foto_02.png` | Sim | Setas e pontos removidos; expansão horizontal conservadora do laboratório; correção fria/verde-acinzentada; contraste e escurecimento moderados; exportação WebP | Desktop 16:9; mobile 3:4 centrado no aluno | `public/images/tepac/hero-tepac-desktop.webp`; `hero-tepac-mobile.webp` | `foto_10.png` tinha maior valor humano, mas pouca área para texto; `foto_09.png` tinha excesso de parede e ação menos clara |
| Dr. Paulo | Autoridade profissional | `foto_20.png` | Sim | Interface removida por crop; exposição, contraste, saturação e nitidez corrigidos de forma leve | 868 × 865 antes da escala | `public/images/tepac/dr-paulo-pncq.webp` | `foto_04.png`, usada no bloco de atuação institucional |
| Atuação institucional | Presença em eventos de saúde | `foto_04.png` | Sim | Setas e pontos eliminados por crop; ajuste leve de cor/contraste/nitidez | 823 × 545 antes da escala | `public/images/tepac/dr-paulo-fiis.webp` | `foto_05.png` e `foto_07.png`, boas para uma futura página de trajetória |
| Prática — preparação | Organização de materiais e amostras | `foto_09.png` | Sim | Interface removida; grande área de parede reduzida; contraste e nitidez moderados | 814 × 575 | `public/images/tepac/pratica-preparacao.webp` | `foto_02.png`, reservada ao hero e à pipetagem |
| Prática — amostras/coleta | Mostrar atividade supervisionada e contato humano | `foto_10.png` | Sim | Setas e pontos eliminados; crop preservando rostos, mãos e coleta; tratamento conservador | 818 × 615 | `public/images/tepac/pratica-coleta.webp` | `foto_11.png` e `foto_13.png` |
| Prática — técnicas/equipamentos | Evidenciar pipetagem e bancada real | `foto_02.png` | Sim | Interface eliminada; crop horizontal; correção leve e exportação WebP | 829 × 620 | `public/images/tepac/pratica-pipetagem.webp` | A versão expandida foi usada somente no hero |
| Prática — biossegurança | Reforçar jaleco, luvas, supervisão e cuidado | `foto_12.png` | Sim | Setas e pontos eliminados; crop preservando rostos, luvas e braço; tratamento conservador | 827 × 620 | `public/images/tepac/pratica-biosseguranca.webp` | `foto_13.png`/`foto_14.png`, duplicadas entre si |
| Formatura | Conclusão, conquista, turma e prova social | `foto_15.png` | Sim | Seta direita e ponto inferior removidos por recorte seguro; exposição/contraste/nitidez leves; nenhuma pessoa ou rosto alterado | 872 × 870 | `public/images/tepac/formatura-tepac.webp` | `foto_17.png` é uma ótima segunda opção e aproxima mais o grupo; `foto_19.png` foi descartada por ser montagem de duas fotos |
| CTA final | Proximidade, equipe e pertencimento | `foto_01.png` | Sim | Interface lateral e pontos removidos por crop; correção leve; rostos preservados | 824 × 638 | `public/images/tepac/turma-tepac.webp` | `foto_08.png` é humana, mas menos institucional |

## Hero — registro detalhado

- **Imagem base:** `foto_02.png`, aluno em atividade de pipetagem no laboratório.
- **Motivo:** ação técnica legível, laboratório reconhecível, aluno posicionado à direita e melhor potencial de área negativa para o título.
- **Adaptações:** remoção da interface do Instagram; extensão horizontal das prateleiras, parede e bancada; limpeza de distrações; tratamento frio discreto; gradiente verde escuro aplicado em CSS para contraste do texto.
- **Expansão de cenário:** limitada à continuação coerente do ambiente já existente. Não foram adicionadas pessoas, profissionais ou equipamentos futuristas.
- **Preservação do realismo:** aluno, ação de pipetagem, jaleco e lógica espacial do laboratório foram mantidos como referência central. A ampliação foi usada apenas para criar respiro à esquerda.
- **Leitura do texto:** desktop usa gradiente horizontal mais escuro à esquerda. No mobile, a foto ocupa a faixa superior e o texto continua em fundo verde escuro, evitando sobreposição sobre o rosto.
- **Arquivos finais:** `hero-tepac-desktop.webp` (1920 × 1080) e `hero-tepac-mobile.webp` (900 × 1200).
- **Ferramenta e prompt final:** edição pelo modo built-in da skill `imagegen`, com especificação `precise-object-edit`: remover somente UI, expandir o laboratório de modo fisicamente plausível, manter aluno e pipetagem no terço direito, criar espaço negativo à esquerda, aplicar gradação institucional conservadora e evitar pessoas inventadas, alteração facial, CGI, HDR, texto e marcas adicionais.

## Revisão das 20 imagens do pacote

| Arquivo | Avaliação e destino |
|---|---|
| `foto_01.png` | Grupo forte, humano e institucional; usada no CTA final após limpeza. |
| `foto_02.png` | Melhor combinação de prática, contexto e composição; base do hero e da etapa de pipetagem. |
| `foto_03.png` | Registro de relacionamento em evento; bom, mas menos útil que as opções de prática e autoridade selecionadas. |
| `foto_04.png` | Forte presença institucional; usada no bloco de atuação profissional. |
| `foto_05.png` | Boa palestra e possibilidade futura para página de trajetória; fundo e enquadramento menos fortes para a landing atual. |
| `foto_06.png` | Entrevista com valor documental; cenário visualmente mais carregado, reservada para notícias ou imprensa. |
| `foto_07.png` | Palestra com bom valor de autoridade; composição vertical menos versátil que `foto_04`. |
| `foto_08.png` | Foto humana com Dr. Paulo e dois jovens; boa para redes ou história, mas marca externa domina o fundo. |
| `foto_09.png` | Ação clara de organização de amostras; usada em prática. |
| `foto_10.png` | Melhor foto de coleta pela clareza dos rostos, ação e laboratório; usada em prática. |
| `foto_11.png` | Boa alternativa de coleta; não usada para evitar repetição temática. |
| `foto_12.png` | Boa combinação de acolhimento e biossegurança; usada em prática. |
| `foto_13.png` | Boa alternativa de coleta; não usada por redundância. |
| `foto_14.png` | Duplicata binária exata de `foto_13.png`; não usada. |
| `foto_15.png` | Melhor foto de formatura para uso amplo: grupo inteiro, contexto arquitetônico e Dr. Paulo; usada. |
| `foto_16.png` | Duplicata binária exata de `foto_15.png`; não usada. |
| `foto_17.png` | Excelente segunda opção de formatura, mais próxima e emocional; preservada como alternativa. |
| `foto_18.png` | Duplicata binária exata de `foto_17.png`; não usada. |
| `foto_19.png` | Montagem vertical com duas fotos e interface; não usada porque a limpeza manteria aparência de print. |
| `foto_20.png` | Retrato institucional forte do Dr. Paulo no PNCQ; usada na seção de autoridade. |

## Tratamento técnico

Os originais permaneceram intactos dentro do pacote e da área temporária de revisão. Todas as imagens referenciadas no site foram exportadas como WebP separado, com qualidade 84, redimensionamento Lanczos, contraste aproximado de +3,5%, saturação reduzida discretamente e nitidez leve. Nenhum rosto, corpo, idade, expressão ou pessoa real foi alterado nos arquivos finais de prática, autoridade, turma e formatura.

As imagens abaixo da dobra usam `loading="lazy"`; somente o hero usa `fetchPriority="high"`. Dimensões intrínsecas foram declaradas no JSX para reduzir layout shift. Todos os ALT texts descrevem pessoa, ação, contexto e relação com o TEPAC.

## Limitações e possibilidades futuras

- A resolução original das capturas varia em torno de 900 px. O tratamento melhora a percepção e a entrega web, mas não cria detalhe documental inexistente.
- As fotografias `foto_05`, `foto_06`, `foto_07`, `foto_08`, `foto_11`, `foto_13` e `foto_17` são boas reservas para páginas futuras de imprensa, trajetória, depoimentos ou novas turmas.
- Se os arquivos originais sem interface do Instagram forem obtidos futuramente, devem substituir as capturas tratadas mantendo os mesmos nomes e proporções finais.
