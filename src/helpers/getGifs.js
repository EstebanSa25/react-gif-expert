export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=v8mk7RC9rxJ0TbotAS1dQqn7zsO0bRI3&q=${category}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
    }));
    console.log(gifs);
    return gifs;
}
