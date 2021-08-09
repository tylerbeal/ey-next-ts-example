export default class Config {
    static ENV: string = process.env.NEXT_PUBLIC_ENV ?? "UNDEFINED";
    static PUBLIC_TEST_VAR: string = process.env.NEXT_PUBLIC_APP_TEST_VAR ?? "UNDEFINED";
    static SERVER_ONLY_VAR: string = process.env.APP_SERVER_ONLY_VALUE ?? "UNDEFINED";
    static API_HOST: string = process.env.NEXT_PUBLIC_API_ENDPOINT ?? "UNDEFINED";
}