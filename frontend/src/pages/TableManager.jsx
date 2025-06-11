import React, { useState, useEffect } from "react";
import axios from "axios";

const TableManager = () => {
  const [tableCount, setTableCount] = useState(0);
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu").then((res) => setMenus(res.data));
  }, []);

  const handleAddItem = (tableId, item) => {
    setOrders((prev) => ({
      ...prev,
      [tableId]: [...(prev[tableId] || []), item],
    }));
  };

  const getTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="number"
          className="border px-4 py-2 rounded mr-2"
          value={tableCount}
          onChange={(e) => setTableCount(Number(e.target.value))}
          placeholder="Enter number of tables"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: tableCount }).map((_, i) => {
          const tableId = `table-${i + 1}`;
          return (
            <div key={tableId} className="border p-4 rounded shadow bg-white">
              <h3 className="text-xl font-bold mb-2">Table {i + 1}</h3>
              <div className="mb-2 space-y-1">
                {menus.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleAddItem(tableId, item)}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded mr-2"
                  >
                    {item.name} - ₹{item.price}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Order:</h4>
                <ul className="list-disc list-inside">
                  {(orders[tableId] || []).map((item, idx) => (
                    <li key={idx}>{item.name} - ₹{item.price}</li>
                  ))}
                </ul>
                <p className="font-bold mt-2">Total: ₹{getTotal(orders[tableId] || [])}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableManager;
