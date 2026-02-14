import { Client, Databases, Query, ID } from "appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;



console.log(
    "ENV CHECK 👉",
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID
);

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (
    query: string,
    movie: Movie
) => {
    try {
        // 🔹 same console output as video
        const result = await database.listDocuments(
            DATABASE_ID,
            TABLE_ID,
            [Query.equal("searchTerm", [query])]
        );

        // console.log(result); // 👈 VIDEO JESA OUTPUT

        // 🔹 agar row already hai → count +1
        if (result.total > 0) {
            const row = result.documents[0];

            await database.updateDocument(
                DATABASE_ID,
                TABLE_ID,
                row.$id,
                {
                    count: (row.count ?? 0) + 1,
                }
            );
        }
        // 🔹 warna new row create
        else {
            await database.createDocument(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                {
                    searchTerm: query,
                    count: 1,
                    movie_id: movie.id,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }
            );
        }
    } catch (error) {
        console.log("Appwrite error ❌", error);
    }
};
