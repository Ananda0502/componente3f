const Etiqueta = (props)=> {

    var textoPadrao = "Texto Padrão da Etiqueta"
    return (
      <>
         <p>{(props.texto != null) ? props.texto : textoPadrao}</p>
      </>
    )
}

export default Etiqueta