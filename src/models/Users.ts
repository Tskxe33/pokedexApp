export interface User {
  idToken: string;
  scopes: string[];
  serverAuthCode: null | string;
  user: userInfo;
}

export interface userInfo {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
}
