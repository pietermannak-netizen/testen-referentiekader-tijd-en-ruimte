"""Maak één HTML-bestand en een broncode-ZIP, zonder externe afhankelijkheden."""
from pathlib import Path
import base64
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
output = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'dist'
output.mkdir(parents=True, exist_ok=True)
html = (ROOT / 'index.html').read_text()
for filename in ('style.css', 'cards.css'):
    html = html.replace(f'<link rel="stylesheet" href="{filename}">', '<style>\n' + (ROOT / filename).read_text() + '\n</style>')
html = html.replace('<script src="app.js" defer></script>', '')
html = html.replace('</body>', '<script>\n' + (ROOT / 'app.js').read_text() + '\n</script>\n</body>')
image = base64.b64encode((ROOT / 'assets/history-cards.png').read_bytes()).decode()
html = html.replace('assets/history-cards.png', 'data:image/png;base64,' + image)
html = html.replace('href="index.html"', 'href="#"')
(output / 'tijdreiziger.html').write_text(html)
files = ['index.html', 'style.css', 'cards.css', 'app.js', 'README.md', '.nojekyll', 'assets/history-cards.png', 'tools/export.py']
with zipfile.ZipFile(output / 'tijdreiziger-code.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
    for name in files:
        archive.write(ROOT / name, 'tijdreiziger/' + name)
print(f'Speelbestand en broncode opgeslagen in {output}')
