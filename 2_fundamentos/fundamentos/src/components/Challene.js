const Challenge = () => {
  let a = 20
  let b = 29

  return (
    <div>
      <div>
        <p>A:{a}</p>
        <p>B:{b}</p>
        <button onClick={() => console.log(a + b)}>Soma!</button>
      </div>
    </div>
  )
}

export default Challenge
