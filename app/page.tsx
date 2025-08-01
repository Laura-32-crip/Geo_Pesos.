import React from 'react';

interface Item {
  [key: string]: string | number | boolean | null;
}

interface Props {
  data?: Item[]; // El "?" permite que sea opcional
}

const Page: React.FC<Props> = ({ data = [] }) => {
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

