export class Users {
    constructor(
        public login: string,
        public avatar_url: string
        public followers_url: string,
        public following_url: string,
        public repos_url: string,
        public name: string,
        public repo_url: string,
        public createdAt: Date
      ) {}
}
