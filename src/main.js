import unified from 'unified'

import parse from 'uniorg-parse'

import document from 'rehype-document'

import uniorg2rehype from 'uniorg-rehype'

import rehype2remark from 'rehype-remark'

import stringify from 'remark-stringify'

// infra.tool-uniorg.main/extract-ast [14] 
function extract_ast(s){
  return JSON.stringify(unified().use(parse).parse(s));
}

// infra.tool-uniorg.main/extract-readme [22] 
function extract_readme(s){
  return unified().use(parse).use(uniorg2rehype).use(document).use(rehype2remark).use(stringify).process(s);
}