import React from 'react';

const Page = () => {
  const data = [
    { nombre: "Juan", edad: "25" },
    { nombre: "Ana", edad: "30" },
    { nombre: "Luis", edad: "40" }
  ];

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {String(value)}
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Page;