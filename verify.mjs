import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
assert.equal(await fs.access('dist').then(() => true, () => false), false, 'The site must use only the root');
const html=await fs.readFile('index.html','utf8');
const css=await fs.readFile('styles.css','utf8');
const js=await fs.readFile('app.js','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Unique HTML IDs');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(id),'Internal anchor '+id);
for(const [,asset] of html.matchAll(/(?:src|href)="(\/(?!\/)[^"]+)"/g)) await fs.access('.'+decodeURI(asset));
for(const [,url] of html.matchAll(/href="(https:\/\/wa.me\/[^\"]+)"/g)) assert(/^https:\/\/wa.me\/(5567991059720|5567999697772)(?:\?|$)/.test(url),'Briefing WhatsApp numbers');
for(const name of ['daniely-capa','daniely','daniely-facial','consultorio-leal','recepcao-leal','fachada-leal']) {
 assert(html.includes(name+'.webp')||js.includes(name),'Photograph included: '+name);
 await fs.access('assets/'+name+'.webp');
}
assert(css.includes('prefers-reduced-motion:reduce'));
assert(js.includes('prefers-reduced-motion: no-preference'));
assert.equal((html.match(/<h1\b/g)||[]).length,1);
assert(html.includes('CRO 3078/MS'));
const manifest=JSON.parse(await fs.readFile('vercel.json','utf8'));
assert.equal(manifest.outputDirectory,'.');
assert.equal(manifest.framework,null);
console.log('PASS: anchors, unique IDs, local assets, practice photographs, WhatsApp, metadata and motion fallback.');

for (const file of ['styles.css', 'smile-scene.css', 'care-showcase.css', 'assets/fonts.css']) {
 const text = (await fs.readFile(file, 'utf8')).replace(/url\((["'])data:[\s\S]*?\1\)/g, '');
 for (const [, resource] of text.matchAll(/url\(['\"]?([^'\")]+)['\"]?\)/g)) {
  if (resource.startsWith('data:') || /^https?:/.test(resource)) continue;
  if (resource.startsWith('#')) { assert(ids.includes(resource.slice(1)), 'Inline SVG filter '+resource); continue; }
  const target = resource.startsWith('/') ? '.' + decodeURI(resource) : path.join(path.dirname(file), decodeURI(resource));
  await fs.access(target);
 }
}
assert(html.includes('src="/assets/fachada-leal.webp"'), 'Practice contact photograph');
console.log('PASS: root-only structure, CSS resources and updated contact photograph.');

assert(!/jönk|jonk|comodoro|3152|digitalx|5565999753639/i.test(html+js),'No former practice identity');
assert(html.includes('Registros autorizados'),'Authorized clinical image context');
const data=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(data.address.addressLocality,'Inocência');
assert.equal(data.address.addressRegion,'MS');
assert.equal(data.telephone,'+5567991059720');
assert(html.includes('data-src="/assets/daniely-scroll.mp4"'));
assert.equal((html.match(/class="patient-card"/g)||[]).length,9);
assert.equal((html.match(/data-service="/g)||[]).length,4);
console.log('PASS: adapted identity, contacts, structured data, video and preserved galleries.');
