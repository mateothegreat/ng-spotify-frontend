export class Session {

    public display_name: string;
    public email: string;
    public access_token: string;
    public refresh_token: string;

    public constructor(obj?: any) {

        this.display_name = obj.display_name;
        this.email = obj.email;
        this.access_token = obj.access_token;
        this.refresh_token = obj.refresh_token;

    }

}
