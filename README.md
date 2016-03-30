LINK TO REPO https://github.com/tangyfruits/temp

This website currently supports: Logical, Wildcard and XQUERY/XPATH Searches.
Additionally users may browse the entire database and view in its original format or human readable text.

FINISHED ALL THESE SCENARIOS

Scenario One
Researcher Rachel wants to search the documents based on text strings. As a digital historian, she expects logical operators (AND, OR, NOT) and limited wildcard expressions to be supported by the search.
Scenario Two
Student Siobhan wants to search the documents based on markup. She would like to use XPath / XQuery queries to find all documents which contain a given tag, both to use the resulting data, and to see if there are enough documents that contain the relevant data for her to use. Siobhan may not be familiar with XPath, but she needs to use it because the world is a rough place and she is determined to succeed. Siobhan should not need to write TEI namespace information in her queries as all the documents are TEI and it is therefore implied.
Scenario Three
All users want to browse the documents, and view the letters in a nice human readable way. They should be able to save the raw TEI of a document that they are looking at. If they email the current URL to a colleague both will see the exact same document.




Logical Queries:
'nature'ftand'trees'
'colenso'ftand'diary'
'editor'ftand'colenso'
'editor'ftor'colenso'
'Penzance'ftand'colenso'
Wildcard Queries:
'tamihan.*' using wildcards
'openoffi.*' using wildcards
'wool-sh.*' using wildcards

XQUERY:
//tei:name[@type = 'place' and position() = 1 and . = 'Manawarakau']
//tei:p[1]
//tei:p[position() = 1]
