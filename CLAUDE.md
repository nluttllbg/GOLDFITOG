# Gold's Gym Fitness — Landing Page

## Regra obrigatória

**Toda animação deve utilizar Lenis para o scroll e GSAP para os movimentos.**

- Nunca use animações de scroll nativas ou bibliotecas de scroll alternativas.
- Todo movimento (reveal, parallax, transição) deve ser implementado com GSAP.
- Todo scroll suave deve ser controlado por Lenis e sincronizado com o ScrollTrigger do GSAP.
- Sincronize Lenis com ScrollTrigger usando `lenis.on('scroll', ScrollTrigger.update)` e o loop `raf(time)` com `gsap.ticker`.
- Duração mínima de animações: 0.6s. Preferir eases `power3.out` e `expo.out`.

## Stack

- Next.js + Tailwind CSS
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- shadcn/ui + lucide-react (ícones)
- Fonte: Montserrat (400, 700, 900)

## Identidade visual

- Preto profundo: #080808
- Dourado: #D4AF37
- Branco: #FFFFFF
- Cinza escuro: #171717

## Conteúdo

Todos os textos em português brasileiro. Não inventar informações não fornecidas.
