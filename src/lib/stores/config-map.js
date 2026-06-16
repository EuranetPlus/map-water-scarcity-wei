import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "Will Europe run out of water?",
  "subtitle": "Water scarcity affected 28% of EU territory during at least one season in 2023, with Cyprus, Malta and Greece recording the highest shares. Even though water abstraction in the EU fell by 14% between 2000 and 2023, the area affected by water scarcity has not declined overall.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nCyprus,CY,0.921,false,\nMalta,MT,0.667,false,\nGreece,EL,0.374,false,\nRomania,RO,0.339,false,\nPortugal,PT,0.307,false,\nItaly,IT,0.272,false,\nSpain,ES,0.265,false,\nDenmark,DK,0.129,false,\nFrance,FR,0.09,false,\nPoland,PL,0.08,false,\nBelgium,BE,0.053,false,\nGermany,DE,0.041,false,\nNetherlands,NL,0.041,false,\nCzechia,CZ,0.036,false,\nLuxembourg,LU,0.032,false,\nAustria,AT,0.028,false,\nBulgaria,BG,0.023,false,\nHungary,HU,0.021,false,\nEstonia,EE,0.017,false,\nIreland,IE,0.013,false,\nLithuania,LT,0.009,false,\nFinland,FI,0.008,false,\nLatvia,LV,0.006,false,\nSlovenia,SI,0.006,false,\nSlovakia,SK,0.004,false,\nCroatia,HR,0.003,false,\nSweden,SE,0.003,false,",
  "parsedData": [
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 0.921,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 0.667,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 0.374,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 0.339,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 0.307,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 0.272,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 0.265,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 0.129,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "France",
      "id": "FR",
      "value": 0.09,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 0.08,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Belgium",
      "id": "BE",
      "value": 0.053,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 0.041,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 0.041,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 0.036,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 0.032,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 0.028,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 0.023,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 0.021,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 0.017,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 0.013,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 0.009,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 0.008,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 0.006,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 0.006,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 0.004,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 0.003,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 0.003,
      "extraInfo": false,
      "text_content": ""
    }
  ],
  "datasetType": "values",
  "datasetUnit": "percent",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": false,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "European Environment Agency (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "Water scarcity conditions are assessed using the seasonal Water Exploitation Index Plus (WEI+), which compares water use with renewable freshwater resources.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://www.eea.europa.eu/en/analysis/indicators/use-of-freshwater-resources-in-europe-1",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "customUnitLabelAvailable": false,
  "customUnitLabel": "",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "Will Europe run out of water?",
    "subtitle": "Water scarcity affected 28% of EU territory during at least one season in 2023, with Cyprus, Malta and Greece recording the highest shares. Even though water abstraction in the EU fell by 14% between 2000 and 2023, the area affected by water scarcity has not declined overall.",
    "textNoteDescription": "Note",
    "textNote": "Water scarcity conditions are assessed using the seasonal Water Exploitation Index Plus (WEI+), which compares water use with renewable freshwater resources.",
    "textSourceDescription": "Source",
    "textSource": "European Environment Agency (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here"
  },
  "clusters": [],
  "colorScale": null
});