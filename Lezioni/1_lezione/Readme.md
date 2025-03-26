- [Vai al file Principale](../../Readme.md)

# Lezione 1: Sviluppo Web Server Side del 26 Marzo 2025

## Legenda

- [Server](#server)

  - [Descrizione del Server](#descrizione-del-server)
  - [Chi può entrare in un Server?](#chi-può-entrare-in-un-server)

  - [Gestione del Server](#gestione-del-server)
    - [Monitoraggio e Manutenzione](#1-monitoraggio-e-manutenzione)
    - [Sicurezza del Server](#2-sicurezza-del-server)
    - [Tipologie di Amministrazione del Server](#3-tipologie-di-amministrazione-del-server)
    - [Backup e Ripristino](#4-backup-e-ripristino)
    - [Virtualizzazione e Cloud](#5-virtualizzazione-e-cloud)

## Server

Un **server** è un sistema informatico che gestisce dati, applicazioni e servizi che vengono richiesti dai **client**. Può essere un computer fisico o una macchina virtuale che risponde alle richieste provenienti dalla rete.

### **Descrizione del Server**

- **Funzione principale**: Fornire servizi e dati ai client connessi, come pagine web, file, database o risorse di rete.
- **Tipologie di server**:
  - **Web Server**: Gestisce richieste HTTP e fornisce pagine web ai browser.
  - **Database Server**: Archivia e gestisce dati per le applicazioni.
  - **File Server**: Consente la condivisione di file tra utenti e dispositivi.
  - **Game Server**: Supporta giochi online gestendo connessioni multiplayer.
  - **Mail Server**: Gestisce l'invio e la ricezione di email.

### **Chi può entrare in un Server?**

L'accesso a un server dipende dalla configurazione:

- **Utenti autenticati**: Necessitano di credenziali per accedere a dati o servizi.
- **Client pubblici**: Possono accedere senza autenticazione, come nel caso dei siti web pubblici.
- **Amministratori**: Hanno privilegi elevati per gestire e configurare il server.
- **Dispositivi e software**: Alcuni server comunicano con altri server o dispositivi IoT per fornire servizi automatizzati.

Ecco un'aggiunta sulla **gestione del server**, con informazioni chiave su monitoraggio, sicurezza e manutenzione.

## **Gestione del Server**

La gestione di un server è fondamentale per garantire prestazioni elevate, sicurezza e disponibilità dei servizi offerti.

### **1. Monitoraggio e Manutenzione**

Per garantire il corretto funzionamento del server, è necessario monitorare costantemente risorse e servizi:

- **Utilizzo della CPU e della RAM**: Per evitare sovraccarichi che rallentano le prestazioni.
- **Spazio su disco**: Un server deve avere spazio disponibile per file di log, database e applicazioni.
- **Monitoraggio del traffico di rete**: Per individuare anomalie o attacchi.
- **Log di sistema**: Raccogliere e analizzare i log per identificare problemi e comportamenti sospetti.

### **2. Sicurezza del Server**

Un server deve essere protetto da minacce esterne e interne. Le misure di sicurezza includono:

- **Autenticazione e Autorizzazione**: Implementare credenziali forti e gestione degli accessi basata sui ruoli.
- **Firewall e Filtri di rete**: Bloccare connessioni non autorizzate e limitare l'accesso a determinati servizi.
- **Aggiornamenti e Patch**: Mantenere aggiornati il sistema operativo e il software per prevenire vulnerabilità.
- **Backup regolari**: Salvare dati critici per evitare perdite in caso di guasti o attacchi informatici.
- **Cifratura dei dati**: Utilizzare HTTPS e crittografia per proteggere le informazioni sensibili.

### **3. Tipologie di Amministrazione del Server**

La gestione di un server può essere eseguita in diversi modi:

- **Amministrazione locale**: Accesso diretto alla macchina fisica o virtuale.
- **Accesso remoto**: Tramite SSH (per Linux) o RDP (per Windows).
- **Pannelli di controllo**: Interfacce web come cPanel o Plesk per facilitare la gestione.
- **Automazione**: Uso di script e software come Ansible o Docker per gestire configurazioni e deployment.

### **4. Backup e Ripristino**

Un buon sistema di backup garantisce la disponibilità dei dati anche in caso di guasti:

- **Backup incrementali**: Salvano solo i dati modificati dall'ultimo backup.
- **Backup completi**: Copia totale del server, più lenta ma completa.
- **Disaster Recovery Plan**: Procedure per ripristinare il server in caso di emergenza.

### **5. Virtualizzazione e Cloud**

Molti server oggi sono virtualizzati o ospitati nel cloud per maggiore scalabilità e riduzione dei costi:

- **Virtual Machine (VM)**: Creazione di più server virtuali su un'unica macchina fisica.
- **Container (Docker/Kubernetes)**: Esecuzione di applicazioni in ambienti isolati e leggeri.
- **Cloud Server**: Soluzioni offerte da AWS, Azure, Google Cloud per scalabilità e flessibilità.
