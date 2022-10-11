const Events = () => {
  const handleMyEvents = e => {
    console.log(e)

    console.log('Clicou!!')
  }

  const renderSomething = x => {
    if (x) {
      return <h2>Renderize isso!</h2>
    } else {
      return <h2>Vai renderizar isso aqui!</h2>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvents}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log('ClicouTwo')}>
          Clique aqui Two!
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log('Isso não deveria existir :)')
            }
          }}
        >
          Click aqui por favor!
        </button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
