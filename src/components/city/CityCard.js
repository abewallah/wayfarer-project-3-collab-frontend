function CityCard(props) {
  function handleClick() {
    props.updateCity(props.index);
  }

  return (
    <div className='card' id='cityCard'>
      <div className='card'>
        <div className='row'>
          <img onClick={handleClick} src={props.city.img} />

          <h1 onClick={handleClick}>{props.city.city}</h1>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
