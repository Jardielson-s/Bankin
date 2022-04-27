# Backin

<p>
This application simulates bank functions such as transfer, payments, etc.
</p>

## Tools

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"   width="100" height="60"/> </a> <a href="https://www.mongodb.com/pt-br"> <img src="https://www.ambientelivre.com.br/media/k2/items/cache/e9432fccf28a953514f077b86e5e657a_XL.jpg"  width="100" height="60"/> </a><a href="https://www.docker.com/"> <img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"  width="100" height="60"/> </a>


## Start application

```
yarn   # at the project root

yarn start 
```

## Run docker 

```
docker pull mongo

docker run -v ~/docker --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin  mongo
```

## Methods
- [x] register user
- [ ] register account
- [ ] deposit
- [ ] transfer
- [ ] pay bill with pix

