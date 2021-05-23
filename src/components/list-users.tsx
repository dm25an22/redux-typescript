import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { UserOperation } from '../redux/user/operation';
import { getUser } from '../redux/user/selector';

export default function ListUsers() {
  const { user, isLoad, error } = useTypeSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserOperation.fetchUsers());
  }, []);

  if (isLoad) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {user.map((it) => (
        <h3 key={it.id}>{it.name}</h3>
      ))}
    </div>
  )
};
