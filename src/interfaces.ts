export interface IDetail {
  name: string,
  base_exp: number,
  abilities: string[],
  height: number,
  weight: number,
  avatar: string,
  types: string[]
}

export interface IPokemon {
  name: string,
  url: string,
  detail: IDetail
}

export interface IUser {
  name: string,
  pokemons: IPokemon[]
}