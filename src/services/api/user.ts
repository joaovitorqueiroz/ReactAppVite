import FakerApi from '../fakerApi'
const fakerApi = new FakerApi()

// Register
export type RegisterResult = {
  success: boolean
  message: string
}

export type RegisterUserData = {
  name: string
  username: string
  password: string
}

export const registerUser = async ({
  name,
  username,
  password,
}: RegisterUserData): Promise<RegisterResult> =>
  await ((await fakerApi.post(`/register`, {
    name,
    username,
    password,
  })) as Promise<RegisterResult>)

// signIn
export type SignInResult = {
  success: boolean
  message: string
}

export type SignInUserData = {
  username: string
  password: string
}

export const signIn = async ({ username, password }: SignInUserData): Promise<SignInResult> =>
  await ((await fakerApi.post(`/login`, {
    username,
    password,
  })) as Promise<SignInResult>)
