# Irish Beauty & Nail Register: sample app

A working demo of the Irish Beauty and Nail Professional Register. Professionals apply online, pay the fee, and their details go to an admin for review. Only approved, active registrations appear on the public register.

**This is a demo.** All data is fictional and stays in the browser (localStorage). No real payments are taken, and nothing is sent to a server.

## What it shows

- A 7-step application: personal details, address with Eircode check, workplace, qualifications, training, insurance, and a declaration
- Payment with test cards: `4242 4242 4242 4242` succeeds, `4000 0000 0000 0002` is declined
- An admin review queue with evidence checks, a duplicate warning, and approve, reject or request-information decisions
- Rules from the brief: payment never approves an application, approval needs paid fees and verified evidence, renewals keep the same registration number, and every decision is in the audit trail
- A public register search that shows active registrations only

## Phones, tablets and desktops

The layout adapts to any screen size. It can be installed as an app (an installable web app, or PWA) on Windows, Mac, Android and iPhone, and it works offline after the first visit. Installing needs an https address or localhost.

## Run it locally

You need [Node.js](https://nodejs.org). It has no other dependencies.

```bash
node serve.js
```

Then open http://localhost:5173. To try it from a phone on the same Wi-Fi, run `HOST=0.0.0.0 node serve.js` and open `http://<this computer's IP>:5173`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: layout, styles and logic |
| `manifest.webmanifest` | App name, colours and icons for installing |
| `sw.js` | Service worker for offline use |
| `icons/` | App icons |
| `serve.js` | Small local web server for testing |
