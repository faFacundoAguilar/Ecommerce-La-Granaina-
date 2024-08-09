import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function StorePayments() {
  // Estado para almacenar la lista de pagos
  const [payments, setPayments] = useState([]);
  // Estado para almacenar el pago seleccionado
  const [selectedPayment, setSelectedPayment] = useState(null);
  // Estado para almacenar el gráfico de ventas
  const [salesData, setSalesData] = useState({
    labels: [],
    datasets: [{
      label: 'Ventas Diarias',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }]
  });
  // Contexto de autenticación
  const { user } = useAuthContext();

  // Función para obtener la lista de pagos
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("API_URL/payments", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await response.json();
        setPayments(data);

        // Generar datos del gráfico de ventas
        const sales = data.reduce((acc, payment) => {
          const date = new Date(payment.date).toLocaleDateString();
          acc[date] = acc[date] ? acc[date] + payment.total : payment.total;
          return acc;
        }, {});
        
        setSalesData({
          labels: Object.keys(sales),
          datasets: [{
            label: 'Ventas Diarias',
            data: Object.values(sales),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }]
        });
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, [user.token]);

  // Función para mostrar los detalles del pago seleccionado
  const showPaymentDetails = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Pagos</h1>
      
      {/* Filtros para la lista de pagos */}
      <div className="mb-4">
        <label htmlFor="status" className="block font-medium text-gray-700 mb-1">Estado:</label>
        <select id="status" name="status" className="border rounded px-4 py-2">
          <option value="all">Todos</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completados</option>
          <option value="failed">Fallidos</option>
        </select>
      </div>

      {/* Gráfico de ventas */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Gráfico de Ventas</h2>
        <Line data={salesData} />
      </div>
      
      {/* Lista de pagos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Pago #{payment.id}</h2>
            <p className="mb-2"><strong>Cliente:</strong> {payment.customer}</p>
            <p className="mb-2"><strong>Total:</strong> ${payment.total}</p>
            <p className="mb-2"><strong>Estado:</strong> {payment.status}</p>
            <button onClick={() => showPaymentDetails(payment)} className="text-blue-500 hover:text-blue-700">Ver detalles</button>
          </div>
        ))}
      </div>
      
      {/* Detalles del pago seleccionado */}
      {selectedPayment && (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Detalles del Pago #{selectedPayment.id}</h2>
          <p><strong>Cliente:</strong> {selectedPayment.customer}</p>
          <p><strong>Total:</strong> ${selectedPayment.total}</p>
          <p><strong>Estado:</strong> {selectedPayment.status}</p>
          <p><strong>Fecha:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
        </div>
      )}

      {/* Métodos de pago */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Métodos de Pago</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p><strong>Tarjeta de Crédito:</strong> **** **** **** 1234</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Actualizar Método de Pago</button>
        </div>
      </div>
      
      {/* Soporte */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Ayuda y Soporte</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p>¿Necesitás ayuda? <a href="#" className="text-blue-500 hover:text-blue-700">Contactanos</a></p>
        </div>
      </div>
    </div>
  );
}

export default StorePayments;
