export const getNews = async (topic)=>{
    const res = await fetch (`https://gnews.io/api/v4/search?q=${topic}&lang=hi&country=in&max=10&apikey=ccbe7b36bf79215f9c268d56ef509cb8`)
    const data = await res.json()
    return data.articles   
}