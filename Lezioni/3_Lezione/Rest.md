[Vai al file Generale](3_Lezione.md)

# Rotte dell'applicazione

## GET /timeline

Risposta

```json
[
  {
    "id": 1,
    "year": 2025,
    "company": "ACME",
    "role": "Sviluppatore Junior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com"
  },
  {
    "id": 2,
    "year": 2024,
    "company": "SIGMA",
    "role": "Sviluppatore Senior",
    "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
    "link": "https://google.com"
  }
]
```

## GET /timeline/:id

```json
{
  "id": 1,
  "year": 2025,
  "company": "ACME",
  "role": "Sviluppatore Junior",
  "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
  "link": "https://google.com"
}
```

## POST /timeline

```JSON
{
  "id": 3,
  "year": 2023,
  "company": "ALPHA",
  "role": "Sviluppatore Web",
  "description": "Desarrollato nuove applicazioni web utilizzando tecnologie moderne.",
  "link": "https://example.com"
}
```

## PUT /timeline/:id

```JSON
{
  "id": 2,
  "year": 2024,
  "company": "SIGMA",
  "role": "Sviluppatore Senior",
  "description": "Sviluppato soluzioni software avanzate con un focus sull'ottimizzazione delle performance.",
  "link": "https://newlink.com"
}
```

## PATCH /timeline/:id

```JSON
{
  "id": 2,
  "role": "Sviluppatore Lead",
  "link": "https://newlink.com"
}
```

## DELETE /timeline/:id

```JSON
{
  "message": "Elemento con id 2 è stato eliminato correttamente."
}
```
