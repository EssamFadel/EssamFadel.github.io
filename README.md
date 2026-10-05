# Essam Fadel — Academic Profile

A dark, responsive Angular profile site with a printable QR code. The QR code points to `https://essamfadel.github.io/`.

## Update your profile

Edit `src/assets/profile-data.json` to update your biography, research project, links and publications. Replace `src/assets/images/essam-fadel.jpeg` to update the portrait.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Run with Docker Compose

```bash
docker compose up --build
```

Open `http://localhost:8080`.

## Free deployment

Push this repository as `EssamFadel.github.io`. The included GitHub Actions workflow deploys every push to `main`. In GitHub, open **Settings → Pages** and set the source to **GitHub Actions** once. The site will be available at `https://essamfadel.github.io/`.
