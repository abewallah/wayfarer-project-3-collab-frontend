import CityCard from './CityCard';



function CitiesList(props) {
  return (
    
    props.cities.map((city, i) => {
      return <CityCard key={city._id} city={city} index={i} updateCity={props.updateCity}/>
    })
    
  )
};

export default CitiesList;

// <Link to={`/wayfarer/${i+1}`}>