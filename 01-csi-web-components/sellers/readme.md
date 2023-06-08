# Sellers

```bash
./dockerize.sh users
```

```bash
docker run -d -p 4001:80 --rm --name sellers sellers 
```

```bash
curl -I http://localhost:4001/buy-button.css
curl -I http://localhost:4001/buy-button.js
```