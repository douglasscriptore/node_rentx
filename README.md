# Cadastro de carro

**RF**
<!-- Requisitos funcionais -->
Deve ser possivel cadastrar um novo carro.


**RNF**
<!-- Requisitos não funcionais -->

**RN**
<!-- Regra de negocios -->
Nao deve ser possivel cadastrar um carro com uma placa já existente.
Nao deve ser possivel auterar a placa de um carro já cadastrado.
O carro deve ser cadastrado por padrao, com disponibilidade.
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro


**RN**
O Usuario nao precisa estar logado no sistema


# Cadastro de Especificacao no carro

**RF**
Deve ser possivel cadastradar uma especificacao para um carro.
Deve ser possivel listar todas as especificacao
Deve ser possivel lsitar todos os carros

**RN**
Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado.
Nao deve ser possivel cadastrar uma especificacao ja existencia para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
utilizar o mutler para upload dos arquivos

**RN**
O Usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O Aluguel deve ter duracao minima de 24hrs
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o msm usuario
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o msm carro