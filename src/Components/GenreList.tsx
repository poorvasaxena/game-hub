import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data} = useGenres();
    console.log("Data",data)

  return (
    <ul>
        {data.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList;
