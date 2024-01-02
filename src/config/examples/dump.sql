create database receitas,

create table usuarios(
	id serial PRIMARY KEY,
  nome text not null,
  email text unique not null,
  senha text not null
)
create table categorias(
  id serial PRIMARY KEY,
  descricao text
)
