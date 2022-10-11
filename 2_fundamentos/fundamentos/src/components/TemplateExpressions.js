const TemplateExpressions = () => {
  const name = 'Jhonne'
  const data = {
    age: 23,
    job: 'Programmer'
  }

  return (
    <div>
      <h1>Ola {name}, Tudo bem?</h1>
      <p>Sua profissão é {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log('JSX é React')}</p>
    </div>
  )
}

export default TemplateExpressions
