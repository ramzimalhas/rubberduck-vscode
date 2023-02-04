```json conversation-template
{
  "id": "chat-german",
  "engineVersion": 0,
  "type": "basic-chat",
  "label": "Starte eine Unterhaltung",
  "description": "Starte eine Unterhaltung mit Rubberduck.",
  "icon": {
    "type": "codicon",
    "value": "comment-unresolved"
  },
  "prompt": {
    "template": {
      "type": "sections",
      "sections": [
        {
          "type": "lines",
          "title": "Anweisungen",
          "lines": [
            "Setze die folgende Unterhaltung fort.",
            "Achte besonders auf die aktuelle Entwickler-Nachricht."
          ]
        },
        {
          "type": "lines",
          "title": "Aktuelle Nachricht",
          "lines": ["Entwickler: ${lastMessage}"]
        },
        {
          "type": "optional-selected-code",
          "title": "Selektierter Quelltext"
        },
        {
          "type": "conversation",
          "roles": {
            "bot": "Roboter",
            "user": "Entwickler"
          }
        },
        {
          "type": "lines",
          "title": "Aufgabe",
          "lines": [
            "Schreibe eine Antwort, welche die Unterhaltung fortsetzt.",
            "Achte besonders auf die aktuelle Entwickler-Nachricht.",
            "Ziehe die Möglichkeit in Betracht, dass es keine Lösung geben könnte.",
            "Frage nach, wenn die Nachricht keinen Sinn ergibt oder mehr Informationen benötigt werden.",
            "Benutze den Stil eines Dokumentationsartikels.",
            "Binde Code-Schnipsel (mit Markdown) und Beispiele ein, wo es angebracht ist."
          ]
        },
        {
          "type": "lines",
          "title": "Antwort",
          "lines": ["Roboter:"]
        }
      ]
    },
    "maxTokens": 1024,
    "stop": ["Roboter:", "Entwickler:"]
  }
}
```