const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');
const minimist = require('minimist');
const TurndownService = require('turndown');

// Configuration de Turndown (à personnaliser)
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  // ... autres options
});

// Fonction utilitaire pour écrire dans un fichier
function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
    } else {
      console.log(`Le contenu a été enregistré dans ${filePath}`);
    }
  });
}

// Fonction pour extraire le contenu HTML de la balise article
function extractArticleHtml(htmlContent) {
  const $ = cheerio.load(htmlContent);
  return $('article').html();
}

// Fonction pour convertir du HTML en Markdown
function convertToMarkdown(html) {
  return turndownService.turndown(html);
}

// Fonction pour récupérer et traiter le contenu d'une URL
async function fetchAndProcess(url, outputFormat, outputFile) {
  try {
    const response = await axios.get(url);
    const html = response.data;

    let content;
    if (outputFormat === 'markdown') {
      content = convertToMarkdown(html);
    } else if (outputFormat === 'html') {
      content =extractArticleHtml(html);
    } else {
      throw new Error('Format de sortie non supporté');
    }

    writeToFile(outputFile, content);
  } catch (error) {
    console.error('Erreur lors du traitement de l\'URL:', error);
  }
}

// Fonction pour générer la commande CLI
function generateCliCommand() {
  const args = minimist(process.argv.slice(2));
  const url = args.url;
  const outputFormat = args.format || 'markdown'; // Par défaut, Markdown
  const outputFile = args.output || 'output.md'; // Extension par défaut en fonction du format

  if (!url) {
    console.error('Veuillez fournir une URL en utilisant l\'option --url');
    return;
  }

  fetchAndProcess(url, outputFormat, outputFile);
}

// Appel de la fonction pour générer la commande CLI
generateCliCommand();