import React, { useState } from 'react';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState('Pizza');
  const [newDish, setNewDish] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [menuItems, setMenuItems] = useState({
    Pizza: [
      { name: 'Margherita', price: '$12.50', description: 'Fresh tomatoes, fresh mozzarella, fresh basil' },
      { name: 'Formaggio', price: '$15.50', description: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)' },
      { name: 'Chicken', price: '$17.00', description: 'Fresh tomatoes, mozzarella, chicken, onions' },
      { name: "Pineapple'o'clock", price: '$16.50', description: 'Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil' },
      { name: 'Meat Town', price: '$20.00', description: 'Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken' },
      { name: 'Parma', price: '$21.50', description: 'Fresh tomatoes, mozzarella, parma, bacon, fresh arugula' }
    ],
    Pasta: [
      { name: 'Lasagna', price: '$13.50', description: 'Special sauce, mozzarella, parmesan, ground beef' },
      { name: 'Ravioli', price: '$14.50', description: 'Ravioli filled with cheese' },
      { name: 'Spaghetti Classica', price: '$11.00', description: 'Fresh tomatoes, onions, ground beef' },
      { name: 'Seafood pasta', price: '$25.50', description: 'Salmon, shrimp, lobster, garlic' }
    ],
    Starter: [
      { name: "Today's Soup", price: '$5.50', description: 'Ask the waiter' },
      { name: 'Bruschetta', price: '$8.50', description: 'Bread with pesto, tomatoes, onion, garlic' },
      { name: 'Garlic bread', price: '$9.50', description: 'Grilled ciabatta, garlic butter, onions' },
      { name: 'Tomozzarella', price: '$10.50', description: 'Tomatoes and mozzarella' }
    ]
  });

  const openMenu = (event, menu) => {
    event.preventDefault();
    setSelectedMenu(menu);
  };

  const addDish = () => {
    const updatedMenuItems = { ...menuItems };
    updatedMenuItems[selectedMenu] = [
      ...updatedMenuItems[selectedMenu],
      { name: newDish, price: newPrice, description: newDescription }
    ];
    setMenuItems(updatedMenuItems);
    setNewDish('');
    setNewPrice('');
    setNewDescription('');
  };

  const deleteDish = (index) => {
    const updatedMenuItems = { ...menuItems };
    updatedMenuItems[selectedMenu] = menuItems[selectedMenu].filter((_, i) => i !== index);
    setMenuItems(updatedMenuItems);
  };

  const updateDishName = (index, newName) => {
    const updatedMenuItems = { ...menuItems };
    updatedMenuItems[selectedMenu][index].name = newName;
    setMenuItems(updatedMenuItems);
  };

  const updateDishPrice = (index, newPrice) => {
    const updatedMenuItems = { ...menuItems };
    updatedMenuItems[selectedMenu][index].price = newPrice;
    setMenuItems(updatedMenuItems);
  };

  const renderMenu = () => {
    return (
      <div id={selectedMenu} className="w3-container menu py-16 bg-white">
        {menuItems[selectedMenu].map((item, index) => (
          <div key={index}>
            <h1>
              <b>{item.name}</b>
              <span className="float-right bg-dark-grey rounded px-4">{item.price}</span>
            </h1>
            <p className="text-grey">{item.description}</p>
            <div className="flex justify-end">
              <button
                className="text-red-500 mr-2"
                onClick={() => deleteDish(index)}
              >
                Sil
              </button>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateDishName(index, e.target.value)}
                className="border border-gray-300 p-1 mr-2"
              />
              <input
                type="text"
                value={item.price}
                onChange={(e) => updateDishPrice(index, e.target.value)}
                className="border border-gray-300 p-1 mr-2"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center text-6xl mb-16">THE MENU</h1>
      <div className="grid grid-cols-3 gap-0 border border-dark-grey">
        <a href="#" onClick={(event) => openMenu(event, 'Pizza')}>
          <div className="col-span-1 p-8 hover:bg-red-500">Pizza</div>
        </a>
        <a href="#" onClick={(event) => openMenu(event, 'Pasta')}>
          <div className="col-span-1 p-8 hover:bg-red-500">Pasta</div>
        </a>
        <a href="#" onClick={(event) => openMenu(event, 'Starter')}>
          <div className="col-span-1 p-8 hover:bg-red-500">Starter</div>
        </a>
      </div>
      {renderMenu()}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          value={newDish}
          onChange={(event) => setNewDish(event.target.value)}
          placeholder="Yemek adı"
          className="border border-gray-300 p-2 mr-2"
        />
        <input
          type="text"
          value={newPrice}
          onChange={(event) => setNewPrice(event.target.value)}
          placeholder="Fiyat"
          className="border border-gray-300 p-2 mr-2"
        />
        <input
          type="text"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          placeholder="Açıklama"
          className="border border-gray-300 p-2 mr-2"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={addDish}
        >
          Ekle
        </button>
      </div>
    </div>
  );
}

export default Menu;
