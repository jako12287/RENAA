export interface PropsForm {
    name: string;
    email: string;
    checked?: boolean;
}

export enum NameRoutes {
    Email = "sendemail",
    NewsLetter = "newslatter",
    Status = "status"
}