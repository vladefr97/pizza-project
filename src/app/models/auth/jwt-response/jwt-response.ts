export interface JwtResponse {
  user: {
    id: number,
    login: string,
    email: string,
    access_token: string,
    expires_in: number
  }
}
