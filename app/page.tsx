import React from 'react';

interface Item {
  [key: string]: unknown;
}

interface Props {
  data: Item[];
}

const Page: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {Object.entries(item as Record<string, unknown>).map(
            ([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {String(value)}
              </div>
            )
          )}
        </li>
      ))}
    </ul>
  );
};

export default Page;
