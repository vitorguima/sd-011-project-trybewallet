import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
  const walletState = useSelector((state) => state.wallet);
  return (
    <table>
      <TableHead />
      <TableBody expenses={ walletState.expenses } />
    </table>
  );
}
