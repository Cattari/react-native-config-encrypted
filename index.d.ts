declare module 'react-native-config-encrypted' {
    export interface ConfigureOptions {
        provider: any;
    }

    export default class SecureConfig {
        static configure(config: ConfigureOptions): void;
        static decrypt(value: string): string;
        static get(key: string): string;
    }
}
