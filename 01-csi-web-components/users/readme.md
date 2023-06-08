# Users

```bash
./dockerize.sh users
```

```bash
docker run -d -p 4000:80 --rm --name users users 
```

```bash
curl -I http://localhost:4000/user-welcome.css
curl -I http://localhost:4000/user-welcome.js
```