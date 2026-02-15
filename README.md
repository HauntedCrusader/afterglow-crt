# AFTERGLOW

### A Pure CSS CRT Monitor Simulation

Afterglow is a visual experiment that recreates the look and behavior of real cathode ray tube monitors using only **HTML, CSS and a small amount of JavaScript (maybe)**.

No canvas.
No shaders.
No WebGL.

Just the browser rendering engine pushed to its limits.

---
<details>
<summary>Ver em Português</summary>

### Uma Simulação de Monitor CRT em CSS Puro

Afterglow é um experimento visual que recria a aparência e o comportamento de monitores de tubo de raios catódicos reais usando apenas **HTML, CSS e uma pequena quantidade de JavaScript (talvez)**.

Sem canvas.
Sem shaders.
Sem WebGL.

Apenas o mecanismo de renderização do navegador levado ao seu limite.

---
</details>

## Preview

Afterglow can be used to simulate different types of real screens:

* Arcade cabinets
* Consumer televisions (VHS era)
* Sony PVM professional monitors
* Old office PCs (early 2000s white screen)
* Damaged CRTs
* Haunted analog interference

The project is designed both as a **retro aesthetic library** and a **study of analog video artifacts**.

---
<details>
<summary>Ver em Português</summary>
  
O Afterglow pode ser usado para simular diferentes tipos de telas reais:

* Gabinetes de fliperama
* Televisores de consumo (era VHS)
* Monitores profissionais Sony PVM
* Computadores de escritório antigos (tela branca do início dos anos 2000)
* Monitores CRT danificados
* Interferência analógica fantasmagórica

O projeto foi concebido tanto como uma **biblioteca estética retrô** quanto como um **estudo de artefatos de vídeo analógico**.

---
</details>

## Themes Included

<p align="center">
  <img src="screenshots/afterglowdemo.gif" alt="Afterglow CRT Demo">
</p>

| Theme   | Description                              |
| ------- | ---------------------------------------- |
| Office98  | Early 2000s PC monitor             |
| PVM     | Clean professional broadcast monitor     |
| Green  | Inspired by monochrome phosphor computer terminals.             |
| Amber  | Modeled after amber monochrome monitors from the 80s and early 90s.             |

---
<details>
<summary>Ver em Português</summary>
  
| Tema   | Descrição                              |
| ------- | ---------------------------------------- |
| Escritório98  | Monitor de PC do início dos anos 2000.              |
| PVM     | Monitor profissional de transmissão com design limpo.     |
| Verde  | Inspirado em terminais de computador monocromáticos com fósforo.             |
| Âmbar  | Inspirado em monitores monocromáticos âmbar dos anos 80 e início dos anos 90.             |

---
</details>

## Installation

Clone the repository:

```bash
https://github.com/HauntedCrusader/afterglow-crt.git
```

Open:

```
index.html
```

That's it. No build step, no dependencies (for now).

---
<details>
<summary>Ver em Português</summary>
  
Clone o repositório:

```bash
https://github.com/HauntedCrusader/afterglow-crt.git
```

Abra:

```
index.html
```

Pronto. Sem etapa de compilação, sem dependências (por enquanto).

---
</details>

## How It Works

Afterglow relies on a combination of:

* layered repeating-linear-gradients
* subpixel contrast tricks
* blur-based phosphor bloom
* brightness modulation
* perspective warping
* timed animation jitter

The goal is to mimic how an **electron beam scans phosphor lines** inside a real CRT display.

---
<details>
<summary>Ver em Português</summary>

O Afterglow utiliza uma combinação de:

* gradientes lineares repetidos em camadas
* truques de contraste subpixel
* efeito de brilho do fósforo baseado em desfoque
* modulação de brilho
* distorção de perspectiva
* oscilação de animação temporizada

O objetivo é simular como um **feixe de elétrons varre as linhas de fósforo** dentro de um monitor CRT real.
  
---
</details>

## Customization

Each preset is controlled by CSS variables:

```
--crt-flicker-speed
--crt-warp-x
--crt-warp-y
--crt-warp-speed
--crt-breath-brightness
--crt-breath-speed
--crt-scanline-dark
--crt-scanline-light
--crt-scanline-opacity
--crt-scanline-size
--crt-beam-height
--crt-beam-blur
--crt-beam-speed
--crt-beam-opacity
--crt-ghost-opacity
--crt-ghost-blur
--crt-overscan
```

You can create your own monitor profile by overriding them:

```css
body.my-monitor{
    --crt-scanline-dark:.25;
    --crt-warp-x:1.002;
    --crt-flicker-speed:5s;
}
```

---
<details>
<summary>Ver em Português</summary>

Cada predefinição é controlada por variáveis CSS:

```
--crt-flicker-speed
--crt-warp-x
--crt-warp-y
--crt-warp-speed
--crt-breath-brightness
--crt-breath-speed
--crt-scanline-dark
--crt-scanline-light
--crt-scanline-opacity
--crt-scanline-size
--crt-beam-height
--crt-beam-blur
--crt-beam-speed
--crt-beam-opacity
--crt-ghost-opacity
--crt-ghost-blur
--crt-overscan
```

Você pode criar seu próprio perfil de monitor sobrescrevendo-as:

```css
body.meu-monitor{

--crt-scanline-dark:.25;

--crt-warp-x:1.002;

--crt-flicker-speed:5s;

}
```

---
</details>

## Credits

Created by **@HauntedCrusader**

Font used: IBM Plex Mono
Inspired by analog video technology and retro hardware preservation communities.

---
<details>
<summary>Ver em Português</summary>

Criado por **@HauntedCrusader**

Fonte utilizada: IBM Plex Mono
Inspirado na tecnologia de vídeo analógica e nas comunidades de preservação de hardware retrô.

---
</details>

MIT License

You are free to use this in personal or commercial projects.
Attribution is appreciated but not required.

<details>
<summary>Ver em Português</summary>

Licença MIT

Você pode usar este material livremente em projetos pessoais ou comerciais.

A atribuição é apreciada, mas não obrigatória.

</details>