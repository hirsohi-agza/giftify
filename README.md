# Giftify

### Docker

#### local

```bash
  # step 1
  docker build -t giftify .
  
  #step 2
  docker run -p 8080:4070 -e PORT=4070 --name giftify-container giftify
```

#### from gh docker registry

* you need a token

```bash
docker login docker.pkg.github.com
# follow the next steps
```
