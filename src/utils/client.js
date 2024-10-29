import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const token = 'skw0Eu1ZgTPmQDw8L7n7bQDjVAkXnGWMCpc0YarlH8mcpNJiYBlOWncvmvNwYMAa3M5261AIAVuJsC6LFOMbUWUlIXZCGI7yJNtcWsVsqS9YD4XbI1R9W0awfAaW3vEXF5HYMlNEGlH90zHI6w9wwVkdzGqoA28Y8kjOd1nP1fYGOh6Mxtvs';

export const client = sanityClient({
    projectId: 'f8qcg63p',
    dataset: 'production',
    apiVersion: '2024-10-28',
    useCdn: true,
    token: token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)