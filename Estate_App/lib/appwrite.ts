import { Avatars, Client } from 'appwrite';


export const config = {
    platform : "com.djcodes.restate",
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)


export const avatar = new Avatars(client);