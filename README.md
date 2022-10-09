# API do desafio [Vaggon](https://github.com/MatheusVict/Front-End-Desafio-Vaggon)

## API do [Desafio MC2](https://github.com/MatheusVict/Front-End-Desafio-Vaggon)

## Atributos:
- Autenticação de usuário pelo Jwt
- Relação de usuário com as tasks
- Cada usuário vê e mexe nas proprias tsks
- criptografia de senha com bcrypt
- middlewares de autenticação
- criação de tables facilitada com TypeOrm
- escrito em typescript
- crud completo das tasks

## inicie dando um clone do projeto:

```ruby
git clone https://github.com/MatheusVict/Desafio-Vaggon.git
```

### Depois: 
```ruby
cd <pasta do projejto>
```
# Configurando a a aplicação:

### Ajuste as configurações da conexão com o banco de dados no arquivo:

```ruby
data-source.ts
```

### Ative o servidor de sua máquina(caso esteja hosteando). E depois rode o comando:

```ruby
npm run migration:generate
```

### Isso irá criar migrations do banco em conexão com o servidor.

### Para criar as tabelas da migration no banco rode o comando:

```ruby
npm run migration:run
```

### Após isso pode rodar em forma de typescript usando:

```ruby
npm run dev
```

### Para transpilar para JavaScript use:

```ruby
npm run build
```

### Após execute a aplicação em JavaScript com:

```ruby
npm start
```
# Rotas:

## Rotas de usuários:

### Rota de cadastro:

```ruby
/users/create
```
### Você deve enviar ex.::

```ruby
{
  "login": "Um login",
  "password": "Uma senha"
}
```

### E terá um retorno de:
```ruby
{
  {
    "id": "Seu id",
    "login": "Seu login"
  }
}
```
### Rota de login:

```ruby
  /users/login
```
### Você enviará: 

```ruby
{
  "login": "Um login",
  "password": "Uma senha"
}
```
### E receberá: 

```ruby
{
  "user": {
    "id": "Seu id"
    "login": "Um login",
  },
  "token": "seu token"
}
```
## Rotas de tasks:

**OBS: Você precisa enviar seu token no Bearer headers para pode acessar as rotas a seguir:**

## Criação de tasks.
```ruby
/tasks/create
```

### Você enviará:
```ruby
 {
	"name": "Nome da task",
	"description": "Descrição da task",
	"status": "Satatus da task",
	"end_day": "dia final de conclusão"
}
```

### E receberá:

```ruby
  "name": "Nome da task",
	"description": "Descrição da task",
	"status": "Satatus da task",
	"end_day": "dia final de conclusão",
  "id": id da task,
	"created_at": "Data de criação",
	"updated_at": "Data de atualização"
```

## Pegar todas as tasks:
```ruby
/tasks
```

### Você recerá

```ruby
Um aray de tasks
```
## Pegar por id:

```ruby
/tasks/<id da task>
```
### E reberá:

```ruby
  "name": "Nome da task",
	"description": "Descrição da task",
	"status": "Satatus da task",
	"end_day": "dia final de conclusão",
  "id": "Id da task que buscou",
	"created_at": "Data de criação",
	"updated_at": "Data de atualização"
```

## Atualizar:

```ruby
/tasks/<Id da task>
```

### Você vai enviar:

```ruby
  "name": "novo Nome da task",
	"description": "Nova descrição da task",
	"status": "Novo satatus da task"
```

## Apagar:
```ruby
/tasks/<Id da task>
```

# Aproveite as funções

```ruby
{
  "Author": "Matheus Victor",
  "Technology":"Typescrip"
}
´´´

