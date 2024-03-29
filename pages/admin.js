import useSWR from "swr";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
import Orden from "../components/Orden";

export default function admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  }); // Algunas veces este fercher se encuentra así -> () => {}, puede ser un arround function o una función aparte. Siempre va a ser una función.

  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  return (
    <AdminLayout pagina={"Admin"}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>

      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p>No hay Órdenes Pendientes</p>
      )}
    </AdminLayout>
  );
}