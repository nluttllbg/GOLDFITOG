# Project memory

## Product intent & audience

- Landing page for **Gold's Gym Fitness**, a gym in Sorriso, MT, Brazil (musculação, treino de força, fisiculturismo, treino híbrido).
- Primary goal: convert visitors into potential students via WhatsApp (https://wa.me/5566997247860).
- Audience: local prospects in Sorriso region looking for serious training environment.
- All copy in Brazilian Portuguese, direct and commercial tone.

## Brand personality & voice

- Premium, sporty, cinematic identity conveying strength, discipline, evolution, determination, professionalism, energy.
- No emojis, no dashes or small decorative text above titles.
- Large, bold, high-contrast headlines; smaller readable body text.

## Visual design & UX direction

- Colors: deep black `#080808`, gold `#D4AF37`, white `#FFFFFF`, dark gray `#171717`. Gold used as accent, not excessive.
- Typography: Montserrat, weights 400/700/900.
- Layout: asymmetric compositions, fullscreen hero, asymmetric activity cards.
- Animations: GSAP + ScrollTrigger + Lenis (synced). Lenis for smooth scroll, GSAP for movements. Min duration 0.6s, eases `power3.out` / `expo.out`. Cinematic reveals, parallax on photos, pin-scroll for impact phrases.
- Responsive from 360px upward; no horizontal scroll. Floating WhatsApp button bottom-right respecting safe areas.
- Icons from `lucide-react` only.
- Contact data: Av. Noêmia Tonello Dalmolin, 1029, Jardim Taiamã, Sorriso – MT, CEP 78893-148. Instagram `@goldsgym.sorriso`. WhatsApp `(66) 99724-7860`. Hours: Mon–Fri 05–11h & 14–22h, Sat 15–18h, Sun closed.

## Decisions, constraints & rationale

- Do not invent facts (equipment counts, teacher/student numbers, testimonials, names, photos). Only present verifiable info.
- Reviews section shows only the real public rating: 4,8 stars / 78 reviews — no fabricated testimonials.
- CLAUDE.md created at project root enforcing Lenis+GSAP rule for all animations.
- `use client` directive added to any component using hooks treated as a Server Component.
- Avoid triggering "Extra attributes from the server: class,style" hydration warning.
- No extra UI/icon packages beyond Tailwind + shadcn/ui + lucide-react unless explicitly requested.
- GSAP, ScrollTrigger, and Lenis installed and configured (animation libraries are necessary, not UI theme packages).

## Open questions & assumptions

- Real student testimonials/names/photos are not available — omitted intentionally until verified data is provided.
- Specific equipment brands/counts and staff details unknown — not presented as fact.
- Google Maps embed uses the provided address; exact map behavior on 360px screens verified visually but not tested on all devices.