# QUAL IMAGEM QUER BAIXAR
FROM node

# DIRETORIO DE TRABALHO
WORKDIR /usr/app

# COPIA O package.json para dentro do workdir que passa a ser ./
COPY package.json ./

RUN npm install --legacy-peer-deps

# Copia tudo (.) para pasta raiz (.)
COPY . .

EXPOSE 3333

CMD ["npm","run", "dev"]