import React, { useEffect, useRef } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, LineElement, PointElement, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import {
  faShoppingBag, // Total Sales
  faShoppingCart, // Total Orders
  faBox, // Total Products
  faUsers, // Total Users
  faChartLine, // Sales Overview
  faClipboardList, // Order Status
  faUserCircle, // Recent Users
  faBoxOpen, // Recent Orders
  faCreditCard // Tarjeta de Crédito
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Registrar escalas y elementos necesarios
ChartJS.register(CategoryScale, ArcElement, LineElement, PointElement, LinearScale, Tooltip, Legend, Title);

function Dashboard() {
  const recentUsers = [
    { id: 1, name: 'Escaloneta', email: 'DS10@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'DS10@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  const recentOrders = [
    { id: '12345', customer: 'KEVIN', amount: '$100', status: 'Pending' },
    { id: '12346', customer: 'Rafaelo', amount: '$150', status: 'Completed' },
    { id: '12347', customer: 'Rafaelo', amount: '$200', status: 'Processing' },
  ];

  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [500, 700, 800, 900, 1000, 1200, 1500],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
      },
    ],
  };

  const orderData = {
    labels: ['Pending', 'Completed', 'Processing'],
    datasets: [
      {
        data: [2, 1, 1],
        backgroundColor: ['#f59e0b', '#10b981', '#ef4444'],
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`,
        },
      },
    },
  };

  const orderOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const renderTableRow = (data) => {
    return (
      <tr key={data.id}>
        <td className="border px-4 py-2">{data.name || data.customer}</td>
        <td className="border px-4 py-2">{data.email || data.amount}</td>
        <td className="border px-4 py-2">{data.role || data.status}</td>
        <td className="border px-4 py-2 text-right">
          <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
              title="Edit"
            >
              <FontAwesomeIcon icon={faUserCircle} className="h-4 w-4" />
            </button>
            <button
              className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
              title="Delete"
            >
              <FontAwesomeIcon icon={faBoxOpen} className="h-4 w-4" />
            </button>
          </span>
        </td>
      </tr>
    );
  };

  // Crear referencias para los gráficos
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Destruir instancias de gráficos si existen
    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }
    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }

    // Crear nuevas instancias de gráficos
    lineChartRef.current = new ChartJS(document.getElementById('salesChart'), {
      type: 'line',
      data: salesData,
      options: salesOptions,
    });

    pieChartRef.current = new ChartJS(document.getElementById('orderChart'), {
      type: 'pie',
      data: orderData,
      options: orderOptions,
    });

    return () => {
      // Destruir instancias de gráficos al desmontar
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, [salesData, orderData, salesOptions, orderOptions]);

  return (
    <>
      <div className="flex-1 p-6 bg-white"> {/* Cambiado a bg-white para fondo blanco */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 animate-shake animate-twice">Dashboard</h1>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded py-2 px-3 text-gray-900"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">
              Search
            </button>
          </div>
        </div>

        {/* CONTENIDO DEL DASHBOARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-purple flex items-center space-x-4">
            <FontAwesomeIcon icon={faCreditCard} className="h-8 w-8 text-black" />
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center space-x-2"> {/* Tamaño de texto reducido a text-lg */}
                <span>Total Sales</span>
              </h2>
              <p className="text-gray-700 text-xl">$23,456</p> {/* Tamaño del texto en p cambiado a text-xl */}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-purple flex items-center space-x-4">
            <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8 text-black" />
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center space-x-2"> {/* Tamaño de texto reducido a text-lg */}
                <span>Total Orders</span>
              </h2>
              <p className="text-gray-700 text-xl">1,234</p> {/* Tamaño del texto en p cambiado a text-xl */}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-purple flex items-center space-x-4">
            <FontAwesomeIcon icon={faBox} className="h-8 w-8 text-black" />
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center space-x-2"> {/* Tamaño de texto reducido a text-lg */}
                <span>Total Products</span>
              </h2>
              <p className="text-gray-700 text-xl">567</p> {/* Tamaño del texto en p cambiado a text-xl */}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-purple flex items-center space-x-4">
            <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-black" />
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center space-x-2"> {/* Tamaño de texto reducido a text-lg */}
                <span>Total Users</span>
              </h2>
              <p className="text-gray-700 text-xl">789</p> {/* Tamaño del texto en p cambiado a text-xl */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-purple">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-purple-600" />
              <span>Sales Overview</span>
            </h2>
            <div className="h-60">
              <canvas id="salesChart"></canvas>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg border border-purple">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6 text-purple-600" />
              <span>Order Status</span>
            </h2>
            <div className="h-60">
              <canvas id="orderChart"></canvas>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-purplemb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-purple" />
            <span>Recent Users</span>
          </h2>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/4 px-4 py-2">Name</th>
                <th className="w-1/4 px-4 py-2">Email</th>
                <th className="w-1/4 px-4 py-2">Role</th>
                <th className="w-1/4 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {recentUsers.map((user) => renderTableRow(user))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-purplemb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <FontAwesomeIcon icon={faBoxOpen} className="h-6 w-6 text-purple" />
            <span>Recent Orders</span>
          </h2>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/4 px-4 py-2">Order ID</th>
                <th className="w-1/4 px-4 py-2">Customer</th>
                <th className="w-1/4 px-4 py-2">Amount</th>
                <th className="w-1/4 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customer}</td>
                  <td className="border px-4 py-2">{order.amount}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
