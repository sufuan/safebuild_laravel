const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

let updatedFiles = [];

for (const file of files) {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let initialContent = content;

        // For index.html specifically:
        content = content.replace(
            /href="https:\/\/www\.facebook\.com\/mynexusbpo"(\s*target="_blank"[^>]*>[\s\S]*?<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">[\s\S]*?d="M504 256C504)/,
            'href="https://www.facebook.com/safebuild.ca"$1'
        );

        // For other files in the header:
        const headerRegex = /(<div class="flex items-center gap-3">\s*)<a href="#"([^>]*>\s*<i[^>]*class="fab fa-facebook-f text-sm")/g;
        content = content.replace(headerRegex, '$1<a href="https://www.facebook.com/safebuild.ca" target="_blank"$2');
        
        if (content !== initialContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            updatedFiles.push(file);
        }
    }
}
console.log(`Updated files: ${updatedFiles.join(', ')}`);
