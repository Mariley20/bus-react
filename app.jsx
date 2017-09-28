
const RowTable = (props) => {
  const _tds = props.items.map((item, index) => <div className='col col-xl-1' key={index}> {item} </div>);
  return (
    <div className='row'>
      {_tds}
    </div>
  )
}

const RTable = ({ seats }) => {
  return (
    <div className="bus">
      <RowTable items={seats[0]} />
      <RowTable items={seats[1]} />
      <RowTable items={seats[2]} />
      <RowTable items={seats[3]} />
    </div>
  );
}
const App = ({ pasajeros, title, seats }) => {
  return (
    <div className="container">
      <div className="text-center header"  ><h1>{title}</h1></div>
      <RTable seats={seats} />
      <div>
        <div className='row tablaPasajeros'>
          <div className='col col-xl-2 col-sm-2'>Nro Asiento</div>
          <div className='col col-xl-5 col-sm-5'>Nombres y apellidos</div>
          <div className='col col-xl-2 col-sm-2'>Nro DNI</div>
        </div>
        <ListarPasajeros pasajeros={pasajeros} />
      </div>
    </div>
  );
}
const ListarPasajeros = (props) => {
  let lista = props.pasajeros.map((elemento, index) => {
    return (<div className="row">
      <div className="col col-xl-2 col-sm-2">{elemento.nroAsiento}</div>
      <div className="col col-xl-5 col-sm-5">{elemento.nombre}</div>
      <div className="col col-xl-2 col-sm-2">{elemento.dni}</div>
    </div>);
  });
  return (lista);
}
let pasajeros = [{
  nroAsiento: "39",
  nombre: "Maritza Fernandes",
  dni: "89898998",
  estado: true
},
{
  nroAsiento: "3",
  nombre: "Carolina Baez",
  dni: "89236723",
  estado: true
},
{
  nroAsiento: "15",
  nombre: "Elizabeth Mamani",
  dni: "78723211",
  estado: true
}
];
let seats = [
  [4, 8, 12, 16, 20, 24, 28, 32],
  [3, 7, 11, 15, 19, 23, 27, 31],
  [2, 6, 10, 14, 18, 22, 26, 30],
  [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render(
  <App pasajeros={pasajeros} title={'Reserva tu Asiento'} seats={seats} />,
  document.getElementById("root")
);
