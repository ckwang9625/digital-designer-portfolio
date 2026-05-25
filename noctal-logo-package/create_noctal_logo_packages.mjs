import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('noctal-logo-packages');
fs.mkdirSync(outDir, { recursive: true });

const concepts = [
  {
    id: 'concept-01-switch',
    title: 'Concept 01 - Switch Off',
    symbol: 'switch',
    dark: '#101820',
    ink: '#101820',
    paper: '#F7F4EF',
    accent: '#B8D8C8',
    warm: '#E6C58A',
    tagline: "For the brain that won't shut off.",
    notes: 'A precise power-down cue for a driven customer who wants control, not sedation.',
  },
  {
    id: 'concept-02-dissolve',
    title: 'Concept 02 - Dissolve Strip',
    symbol: 'dissolve',
    dark: '#17151C',
    ink: '#17151C',
    paper: '#FAF8F3',
    accent: '#C9B6E4',
    warm: '#CFE7E0',
    tagline: 'Fast calm, clean morning.',
    notes: 'A subtle oral-strip format story: fast, clean, and premium without looking pharmaceutical.',
  },
  {
    id: 'concept-03-neural-calm',
    title: 'Concept 03 - Neural Calm',
    symbol: 'neural',
    dark: '#0E1B1F',
    ink: '#0E1B1F',
    paper: '#F8F6F0',
    accent: '#A9C9D8',
    warm: '#E5BCA6',
    tagline: "For the brain that won't shut off.",
    notes: 'A calmer signal-wave mark that suggests mental quiet without using generic moon or star symbols.',
  },
];

function esc(s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function symbolMarkup(concept, mode = 'dark', scale = 1) {
  const fg = mode === 'dark' ? concept.paper : concept.ink;
  const accent = concept.accent;
  if (concept.symbol === 'switch') {
    return `
      <g transform="scale(${scale})">
        <rect x="0" y="0" width="96" height="96" rx="22" fill="${accent}"/>
        <path d="M48 18v28" stroke="${concept.ink}" stroke-width="8" stroke-linecap="round"/>
        <path d="M33.2 31.5a27 27 0 1 0 29.6 0" fill="none" stroke="${concept.ink}" stroke-width="8" stroke-linecap="round"/>
        <path d="M30 70c11 5.5 25 5.5 36 0" stroke="${fg}" stroke-opacity=".44" stroke-width="4" stroke-linecap="round"/>
      </g>`;
  }
  if (concept.symbol === 'dissolve') {
    return `
      <g transform="scale(${scale})">
        <rect x="0" y="0" width="96" height="96" rx="20" fill="${accent}"/>
        <path d="M24 34c0-5 4-9 9-9h30c5 0 9 4 9 9v28c0 5-4 9-9 9H33c-5 0-9-4-9-9V34z" fill="${concept.paper}" opacity=".9"/>
        <path d="M32 43h31M32 53h24" stroke="${concept.ink}" stroke-width="6" stroke-linecap="round"/>
        <circle cx="66" cy="53" r="3.5" fill="${concept.ink}"/>
        <circle cx="74" cy="61" r="2.4" fill="${concept.ink}" opacity=".66"/>
      </g>`;
  }
  return `
    <g transform="scale(${scale})">
      <rect x="0" y="0" width="96" height="96" rx="22" fill="${accent}"/>
      <path d="M23 52c8-18 20-18 29 0s17 18 25 0" fill="none" stroke="${concept.ink}" stroke-width="7" stroke-linecap="round"/>
      <path d="M24 66h48" stroke="${concept.paper}" stroke-opacity=".72" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="39" r="5.5" fill="${concept.ink}"/>
      <circle cx="68" cy="39" r="5.5" fill="${concept.ink}"/>
    </g>`;
}

function logoSvg(concept, mode) {
  const bg = mode === 'dark' ? concept.dark : concept.paper;
  const fg = mode === 'dark' ? concept.paper : concept.ink;
  const sub = mode === 'dark' ? '#CFC9BF' : '#57534D';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="720" viewBox="0 0 1600 720" role="img" aria-labelledby="title desc">
  <title id="title">${esc(concept.title)} Noctal primary logo ${mode}</title>
  <desc id="desc">Premium sleep supplement wordmark and icon sample for Noctal.</desc>
  <rect width="1600" height="720" fill="${bg}"/>
  <g transform="translate(180 208)">
    ${symbolMarkup(concept, mode, 1.45)}
  </g>
  <g transform="translate(360 244)">
    <text x="0" y="82" fill="${fg}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="118" font-weight="600" letter-spacing="0">Noctàl</text>
    <text x="4" y="144" fill="${sub}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="500" letter-spacing="5">DISSOLVABLE SLEEP STRIPS</text>
    <path d="M4 178h598" stroke="${concept.accent}" stroke-width="6" stroke-linecap="round"/>
    <text x="4" y="230" fill="${sub}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="30" font-weight="500" letter-spacing="0">${esc(concept.tagline)}</text>
  </g>
</svg>
`;
}

function iconSvg(concept) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 96 96" role="img" aria-labelledby="title desc">
  <title id="title">${esc(concept.title)} favicon</title>
  <desc id="desc">Square icon sample for Noctal.</desc>
  ${symbolMarkup(concept, 'light', 1)}
</svg>
`;
}

function transparentLockupSvg(concept, mode) {
  const fg = mode === 'dark' ? concept.paper : concept.ink;
  const sub = mode === 'dark' ? '#CFC9BF' : '#57534D';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="520" viewBox="0 0 1600 520" role="img" aria-labelledby="title desc">
  <title id="title">${esc(concept.title)} transparent logo ${mode}</title>
  <desc id="desc">Transparent-background vector logo sample for Noctal.</desc>
  <g transform="translate(150 132)">
    ${symbolMarkup(concept, mode, 1.28)}
  </g>
  <g transform="translate(315 154)">
    <text x="0" y="82" fill="${fg}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="112" font-weight="600" letter-spacing="0">Noctàl</text>
    <text x="4" y="142" fill="${sub}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="31" font-weight="500" letter-spacing="5">DISSOLVABLE SLEEP STRIPS</text>
  </g>
</svg>
`;
}

function guidelineSvg(concept) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2100" viewBox="0 0 1600 2100" role="img" aria-labelledby="title desc">
  <title id="title">${esc(concept.title)} one-page brand guidelines</title>
  <desc id="desc">Colors, type, usage rules, and logo examples for Noctal.</desc>
  <rect width="1600" height="2100" fill="${concept.paper}"/>
  <rect x="0" y="0" width="1600" height="360" fill="${concept.dark}"/>
  <g transform="translate(118 108)">${symbolMarkup(concept, 'dark', 1.1)}</g>
  <text x="250" y="178" fill="${concept.paper}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="92" font-weight="600">Noctàl</text>
  <text x="254" y="238" fill="#D7D2C8" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="28" font-weight="500" letter-spacing="4">ONE-PAGE BRAND GUIDELINES</text>
  <text x="118" y="470" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="46" font-weight="650">${esc(concept.title)}</text>
  <text x="118" y="530" fill="#4C4842" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="30" font-weight="450">${esc(concept.notes)}</text>

  <text x="118" y="660" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="650">Color Palette</text>
  <g transform="translate(118 700)">
    <rect x="0" y="0" width="300" height="170" rx="8" fill="${concept.dark}"/><text x="0" y="220" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">${concept.dark}</text>
    <rect x="345" y="0" width="300" height="170" rx="8" fill="${concept.paper}" stroke="#D8D1C6"/><text x="345" y="220" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">${concept.paper}</text>
    <rect x="690" y="0" width="300" height="170" rx="8" fill="${concept.accent}"/><text x="690" y="220" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">${concept.accent}</text>
    <rect x="1035" y="0" width="300" height="170" rx="8" fill="${concept.warm}"/><text x="1035" y="220" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">${concept.warm}</text>
  </g>

  <text x="118" y="1040" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="650">Typography</text>
  <text x="118" y="1106" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="54" font-weight="650">Avenir Next / Inter / Helvetica Neue</text>
  <text x="118" y="1160" fill="#4C4842" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="28">Use a clean humanist sans serif. Keep tracking at 0 for display text; use light caps tracking for small labels only.</text>

  <text x="118" y="1295" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="650">Logo Usage</text>
  <g transform="translate(118 1340)">
    <rect x="0" y="0" width="610" height="300" rx="8" fill="${concept.dark}"/>
    <g transform="translate(56 82)">${symbolMarkup(concept, 'dark', .74)}</g>
    <text x="150" y="150" fill="${concept.paper}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="70" font-weight="600">Noctàl</text>
    <text x="150" y="198" fill="#D7D2C8" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="500" letter-spacing="3">DISSOLVABLE SLEEP STRIPS</text>
    <text x="0" y="350" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">Preferred dark-background lockup.</text>

    <rect x="720" y="0" width="610" height="300" rx="8" fill="#FFFFFF" stroke="#D8D1C6"/>
    <g transform="translate(776 82)">${symbolMarkup(concept, 'light', .74)}</g>
    <text x="870" y="150" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="70" font-weight="600">Noctàl</text>
    <text x="870" y="198" fill="#57534D" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="500" letter-spacing="3">DISSOLVABLE SLEEP STRIPS</text>
    <text x="720" y="350" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="24">Use light version on white or warm neutral fields.</text>
  </g>

  <text x="118" y="1810" fill="${concept.ink}" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="650">Dos and Don'ts</text>
  <text x="118" y="1870" fill="#4C4842" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="28">Do preserve clear space equal to the icon width. Do use high contrast. Do keep the accent mark in Noctàl.</text>
  <text x="118" y="1922" fill="#4C4842" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="28">Don't add moons, stars, gradients, drop shadows, pill imagery, or clinical blue-white medical styling.</text>
  <text x="118" y="1974" fill="#4C4842" font-family="Avenir Next, Inter, Helvetica Neue, Arial, sans-serif" font-size="28">Don't stretch the wordmark, rotate the icon, lower contrast, or place the logo on busy photography.</text>
</svg>
`;
}

function pdfText(s) {
  return String(s).replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function rgb(hex) {
  const v = hex.replace('#', '');
  return [
    parseInt(v.slice(0, 2), 16) / 255,
    parseInt(v.slice(2, 4), 16) / 255,
    parseInt(v.slice(4, 6), 16) / 255,
  ];
}

function fill(hex) {
  const [r, g, b] = rgb(hex);
  return `${r.toFixed(4)} ${g.toFixed(4)} ${b.toFixed(4)} rg`;
}

function guidelinePdf(concept) {
  const W = 1600;
  const H = 2100;
  const y = (v) => H - v;
  const lines = [];
  const rect = (x, top, w, h, color) => lines.push(`${fill(color)} ${x} ${y(top + h)} ${w} ${h} re f`);
  const text = (x, top, size, color, value, font = 'F1') => {
    lines.push(`BT /${font} ${size} Tf ${fill(color)} ${x} ${y(top)} Td (${pdfText(value)}) Tj ET`);
  };

  rect(0, 0, W, H, concept.paper);
  rect(0, 0, W, 360, concept.dark);
  text(118, 175, 86, concept.paper, 'Noctal', 'F2');
  text(118, 240, 28, '#D7D2C8', 'ONE-PAGE BRAND GUIDELINES');
  text(118, 470, 46, concept.ink, concept.title, 'F2');
  text(118, 530, 28, '#4C4842', concept.notes);

  text(118, 660, 34, concept.ink, 'Color Palette', 'F2');
  [
    ['Night', concept.dark, 118],
    ['Warm Neutral', concept.paper, 463],
    ['Accent', concept.accent, 808],
    ['Support', concept.warm, 1153],
  ].forEach(([label, color, x]) => {
    rect(x, 700, 300, 170, color);
    text(x, 920, 24, concept.ink, `${label}  ${color}`);
  });

  text(118, 1040, 34, concept.ink, 'Typography', 'F2');
  text(118, 1106, 52, concept.ink, 'Avenir Next / Inter / Helvetica Neue', 'F2');
  text(118, 1160, 27, '#4C4842', 'Use a clean humanist sans serif. Keep display tracking at 0; reserve tracked caps for small labels.');

  text(118, 1295, 34, concept.ink, 'Logo Usage', 'F2');
  rect(118, 1340, 610, 300, concept.dark);
  text(175, 1502, 68, concept.paper, 'Noctal', 'F2');
  text(175, 1552, 20, '#D7D2C8', 'DISSOLVABLE SLEEP STRIPS');
  text(118, 1690, 24, concept.ink, 'Preferred dark-background lockup.');
  rect(838, 1340, 610, 300, '#FFFFFF');
  text(895, 1502, 68, concept.ink, 'Noctal', 'F2');
  text(895, 1552, 20, '#57534D', 'DISSOLVABLE SLEEP STRIPS');
  text(838, 1690, 24, concept.ink, 'Use light version on white or warm neutral fields.');

  text(118, 1810, 34, concept.ink, "Dos and Don'ts", 'F2');
  text(118, 1870, 27, '#4C4842', 'Do preserve clear space equal to the icon width. Do use high contrast. Do keep the accent in Noctal.');
  text(118, 1922, 27, '#4C4842', "Don't add moons, stars, gradients, drop shadows, pill imagery, or clinical blue-white styling.");
  text(118, 1974, 27, '#4C4842', "Don't stretch the wordmark, rotate the icon, lower contrast, or place the logo on busy photography.");

  const content = lines.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((obj, i) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return pdf;
}

for (const concept of concepts) {
  const dir = path.join(outDir, concept.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'noctal-primary-dark.svg'), logoSvg(concept, 'dark'));
  fs.writeFileSync(path.join(dir, 'noctal-primary-light.svg'), logoSvg(concept, 'light'));
  fs.writeFileSync(path.join(dir, 'noctal-logo-transparent-dark.svg'), transparentLockupSvg(concept, 'dark'));
  fs.writeFileSync(path.join(dir, 'noctal-logo-transparent-light.svg'), transparentLockupSvg(concept, 'light'));
  fs.writeFileSync(path.join(dir, 'noctal-icon-favicon.svg'), iconSvg(concept));
  fs.writeFileSync(path.join(dir, 'noctal-brand-guidelines.svg'), guidelineSvg(concept));
  fs.writeFileSync(path.join(dir, 'noctal-brand-guidelines.pdf'), guidelinePdf(concept));
fs.writeFileSync(path.join(dir, 'README.md'), `# ${concept.title}

Sample logo package for Noctal, a premium dissolvable sleep-strip supplement brand.

## Included

- Primary logo, dark background: \`noctal-primary-dark.svg\` and \`noctal-primary-dark.png\`
- Primary logo, light background: \`noctal-primary-light.svg\` and \`noctal-primary-light.png\`
- Transparent lockups: \`noctal-logo-transparent-dark.*\` and \`noctal-logo-transparent-light.*\`
- Square icon / favicon: \`noctal-icon-favicon.svg\` and \`noctal-icon-favicon.png\`
- One-page guidelines: \`noctal-brand-guidelines.svg\`, \`noctal-brand-guidelines.png\`, and \`noctal-brand-guidelines.pdf\`

## Concept

${concept.notes}

## Production note

These are sample vector directions. Before final client delivery, convert the wordmark text to outlines in Illustrator/Figma and export final PNG/PDF/AI files from the approved vector source.
`);
}

fs.writeFileSync(path.join(outDir, 'README.md'), `# Noctal Logo Package Samples

Three original premium minimalist identity directions for the Noctal sleep supplement brief.

Each concept folder contains dark and light primary logos, transparent vector lockups, a square favicon/icon, PNG exports, and one-page brand usage guidelines as SVG/PDF.
`);
