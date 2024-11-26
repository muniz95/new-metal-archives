import { Spinner } from '@/components/spinner';
import React from 'react';
import { useLatestAdditions } from '../api/get-latest-additions';
import { LatestItem, LatestItemType } from '@/types/api';
import { UseQueryResult } from '@tanstack/react-query';

interface IProps {
  additionType: LatestItemType;
  useQueryFunction: ({ additionType }: { additionType: LatestItemType }) =>
    UseQueryResult<LatestItem[]>
}

const Latest: React.FC<IProps> = ({ additionType, useQueryFunction }) => {
  const query = useQueryFunction({
    additionType
  });
  if (query.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  
  const latestAdditions = query.data!;
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{additionType.substring(0, additionType.length-1)} Name</th>
            <th className="text-right">Date</th>
          </tr>
        </thead>
        <tbody>
          {latestAdditions.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="text-right">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Latest;