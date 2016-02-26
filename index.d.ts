declare function basicAuthConnect (callback: (username: string, password: string) => boolean, realm?: string): basicAuthConnect.Middleware;
declare function basicAuthConnect (callback: (username: string, password: string, cb: (err: Error, user: any) => any) => any, realm?: string): basicAuthConnect.Middleware;
declare function basicAuthConnect (username: string, password: string, realm?: string): basicAuthConnect.Middleware;

declare namespace basicAuthConnect {
  export type Middleware = (req: any, res: any, next: (err: Error) => any) => void;
}

export = basicAuthConnect;
