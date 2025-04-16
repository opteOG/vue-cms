import type path from "path"

export type loginAccount = {
  id: string,
  firstName: string,
  lastName: string,
}

export type account = {
  password: string,
  email: string,
  username: string
}

export type menu = {
  name: string,
  path: string,
  children: {name: string, path: string}[]
}