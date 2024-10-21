import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';
import { log } from 'console';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [numOfTruckSent, setTruckNum] = useState<number>(0);
  const [dispatchAmount, setDispatchAmount] = useState<number>(5); // Default value

  const handleTruckDeparture = () => {
    if (dispatchAmount >= 5 && dispatchAmount <= 20) {
      if (warehouseItems < dispatchAmount) {
        alert('lack of items in warehouse');
      }
      else{
        setIsTruckLeft(true);
        setWarehouseItems(warehouseItems - dispatchAmount);
        setTruckNum(numOfTruckSent + 1);
        console.log(warehouseItems);
      }
    } else {
      alert('Please enter a value between 5 and 20.');
    }
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus isTruckLeft={isTruckLeft} numOfTruck={numOfTruckSent} onTruckDeparture={handleTruckDeparture} />
      </div>
      <div className="dispatch-input">
          <label>
            Number of items to dispatch (5 to 20):
            <input
              type="number"
              value={dispatchAmount}
              onChange={(e) => setDispatchAmount(Number(e.target.value))}
              min={5}
              max={20}
            />
          </label>
        </div>
    </div>
  );
};

export default LogisticsDashboard;